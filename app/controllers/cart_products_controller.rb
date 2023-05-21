# class CartProductsController < ApplicationController
#   def add_to_cart
#     cart_product = CartProduct.new(cart_product_params)
#     cart_product.cart = @current_user.cart # Associate with the current user's cart
#     if cart_product.save
#       render json: cart_product, status: :ok
#     else
#       render json: { error: cart_product.errors.full_messages }, status: :unprocessable_entity
#     end
#   end

#   private

#   def cart_product_params
#     params.require(:cart_product).permit(:quantity, :product_id)
#   end
  
# end

class CartProductsController < ApplicationController
  def add_to_cart
    product_id = params[:cart_product][:product_id]
    quantity = params[:cart_product][:quantity]
    cart = @current_user.cart

    existing_product = cart.cart_products.find_by(product_id: product_id)

    if existing_product
      # If the product already exists in the cart, update the quantity instead of creating a duplicate
      existing_product.update(quantity: existing_product.quantity + quantity.to_i)
      render json: existing_product, status: :ok
    else
      product = Product.find_by(id: product_id)

      unless product
        render json: { error: 'Product not found' }, status: :not_found
        return
      end

      cart_product = cart.cart_products.new(product: product, quantity: quantity)

      if cart_product.save
        render json: cart_product, status: :created
      else
        render json: cart_product.errors, status: :unprocessable_entity
      end
    end
  end

  private

  def cart_product_params
    params.require(:cart_product).permit(:quantity, :product_id)
  end
end
