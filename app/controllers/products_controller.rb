class ProductsController < ApplicationController
  skip_before_action :authorize, only: :index
  def index
    products = Product.all
    render json: products, status: :ok
  end

  def create
    product = Product.create!(product_params)
    render json: product, status: :created
  end

  private

  def product_params
    params.permit(:sku, :discount_percent, :inventory_qty, :units, :name, :brand, :description, :price, :image_url)
  end

end
