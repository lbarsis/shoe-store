class CartProductsController < ApplicationController
  def create
    product_id = params[:cart_product][:product_id]
    quantity = params[:cart_product][:quantity]
    cart = @current_user.cart

    existing_product = cart.cart_products.find_by(product_id: product_id)

    if existing_product
      # If the product already exists in the cart, update the quantity instead of creating a duplicate
      existing_product.update(quantity: existing_product.quantity + 1)
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

  def update
    cart_product = CartProduct.find(params[:id])
    
    if cart_product_params[:quantity].to_i == 0
      cart_product.destroy
      render json: {} # return an empty object or some message to confirm deletion
    elsif cart_product.update(cart_product_params)
      render json: cart_product
    else
      render json: { errors: cart_product.errors.full_messages }, status: :unprocessable_entity
    end
  end  

  def destroy
    cart_product = CartProduct.find_by(id: params[:id])
    if cart_product
      cart_product.destroy
      render json: cart_product
    else
      render json: { errors: ["Not found"] }, status: :not_found
    end
  end

  private

  def cart_product_params
    params.require(:cart_product).permit(:quantity, :product_id)
  end
end
