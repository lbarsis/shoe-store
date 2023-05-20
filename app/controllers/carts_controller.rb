class CartsController < ApplicationController
  # skip_before_action :authorize, only: [:show, :my_cart]
  def show
    render json: @current_user.cart, status: :ok
  end
  
  def my_cart
    cart = @current_user.cart
    render json: cart, status: :ok
  end
end
