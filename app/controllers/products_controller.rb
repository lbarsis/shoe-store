class ProductsController < ApplicationController
  skip_before_action :authorize, only: :index
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :require_admin, only: [:create, :update, :destroy]

  def index
    products = Product.all
    render json: products, status: :ok
  end

  def show
    render json: @product, status: :ok
  end

  def create
    product = Product.new(product_params)

    if product.save
      # Add to stripe products
      stripe_product = Stripe::Product.create({
        name: product_params[:name],
        default_price_data: {
          unit_amount: product_params[:price].to_i,
          currency: 'usd'
        },
        metadata: {
          product_id: product.id,
          sku: product_params[:sku]
        }
      })

      product.product_image.attach(product_params[:image_url])

      #setup direct link for accessing aws link
      key = product.product_image.key
      
      product.update!(default_price: stripe_product.default_price, stripe_product_id: stripe_product.id, image_url: "https://steppers-rails-product-images.s3.us-west-1.amazonaws.com/#{key}")
      render json: product, status: :created
    else
      render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      new_price = Stripe::Price.create(
        unit_amount: product_params[:price].to_i, 
        currency: 'usd',
        product: @product.stripe_product_id,
      )
      
      Stripe::Product.update(@product.stripe_product_id, 
        name: product_params[:name],
        default_price: new_price.id,
        metadata: {
          product_id: @product.id,
          sku: product_params[:sku]
        }
      )
      @product.product_image.purge
      @product.product_image.attach(product_params[:image_url])

      #setup direct link for accessing aws link
      key = @product.product_image.key

      @product.update!(default_price: new_price.id, image_url: "https://steppers-rails-product-images.s3.us-west-1.amazonaws.com/#{key}")
      render json: @product, status: :ok
    else
      render json: {errors: "Uh oh, something went wrong, try again."}, status: :unprocessable_entity
    end
  end

  def destroy
    if @product.destroy
      Stripe::Product.update(@product.stripe_product_id, {active: false})
      render json: {message: "Itinerary Deleted"}, head: :no_content
    else
      render json: {errors: "Uh oh, something went wrong, try again."}, status: :unprocessable_entity
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:sku, :discount_percent, :inventory_qty, :units, :name, :brand, :description, :price, :image_url, :product_image)
  end

end
