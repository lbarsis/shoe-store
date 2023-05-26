class ProductsController < ApplicationController
  skip_before_action :authorize, only: :index
  def index
    products = Product.all
    render json: products, status: :ok
  end

  def create
   stripe_product = Stripe::Product.create({
      name: product_params[:name],
      default_price_data: {
        unit_amount: product_params[:price].to_i,
        currency: 'usd'
      }
    })
    product = Product.new(product_params)
    product.default_price = stripe_product.default_price
    product.save
    render json: product, status: :created
  end

  # def create
  #   product = Product.new(product_params)

  #   # Create a new Stripe product using the Stripe API
  #   stripe_product = Stripe::Product.create({
  #     name: product.name
  #   })

  #   # Set the default price for the Stripe product
  #   stripe_price = Stripe::Price.create({
  #     product: stripe_product.id,
  #     unit_amount: product.price.to_i * 100, # Convert to cents
  #     currency: 'usd'
  #   })

  #   # Assign the Stripe product ID and default price ID to the server product
  #   product.stripe_product_id = stripe_product.id
  #   product.stripe_price_id = stripe_price.id

  #   if product.save
  #     render json: product, status: :created
  #   else
  #     render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end


  private

  def product_params
    params.permit(:sku, :discount_percent, :inventory_qty, :units, :name, :brand, :description, :price, :image_url)
  end

end
