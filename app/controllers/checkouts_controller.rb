class CheckoutsController < ApplicationController
  # Create a PaymentIntent with amount and currency
  def checkout
    session = Stripe::Checkout::Session.create({
      success_url: 'http://localhost:4000',
      line_items: @current_user.cart_products.map { |cp| {price: cp.product.default_price, quantity: cp.quantity} },
      mode: 'payment',
    })
    redirect_to session.url
  end
end

