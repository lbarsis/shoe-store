class CartProductsController < ApplicationController
  def add_to_cart
    cart_product = CartProduct.new(cart_product_params)
    cart_product.cart = @current_user.cart # Associate with the current user's cart
    if cart_product.save
      render json: cart_product.cart, status: :ok
    else
      render json: { error: cart_product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def cart_product_params
    params.require(:cart_product).permit(:quantity, :product_id)
  end
  
end
