class CartsController < ApplicationController
  before_action :find_cart
  # skip_before_action :authorize, only: [:show, :my_cart]
  def show
    render json: @current_user.cart, status: :ok
  end
  
  def my_cart
    render json: @cart, status: :ok
  end

  def clear
    if @cart
      @cart.cart_products.destroy_all # Assuming cart_products is the association that contains products in the cart
      render json: { message: "Cart cleared successfully" }, status: :ok
    else
      render json: { error: "Cart not found" }, status: :not_found
    end
    
  end

  private

  def find_cart
    @cart = @current_user.cart
  end

end
