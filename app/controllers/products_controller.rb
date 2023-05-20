class ProductsController < ApplicationController
  # skip_before_action :authorize
  def index
    products = Product.all
    render json: products, status: :ok
  end
end
