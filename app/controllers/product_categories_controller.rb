class ProductCategoriesController < ApplicationController
  def index
    products = Product.all
    render json: products
  end
end
