class ProductsController < ApplicationController
  skip_before_action :authorize, only: :index
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    products = Product.all
    render json: products, status: :ok
  end

  def show
    render json: @product.as_json(include: :images).merge(
      images: @product.images.map do |image|
        url_for(image)
      end
    )
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
      
      product.update!(default_price: stripe_product.default_price)
      render json: product, status: :created
    else
      render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
    end
  end

   def update
    if @product.update(product_params)
      render json: @product, status: :ok
    else
      render json: {errors: "Uh oh, something went wrong, try again."}, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:sku, :discount_percent, :inventory_qty, :units, :name, :brand, :description, :price, image_url: [])
  end

end
