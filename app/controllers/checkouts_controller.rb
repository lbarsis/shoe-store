class CheckoutsController < ApplicationController
  # Create a PaymentIntent with amount and currency
  def checkout
    session = Stripe::Checkout::Session.create({
      success_url: 'https://steppers.onrender.com',
      cancel_url: 'https://steppers.onrender.com',
      # success_url: 'http://localhost:4000',
      customer: @current_user.stripe_customer_id,
      # customer_email: @current_user.email,
      line_items: @current_user.cart_products.map { |cp| {price: cp.product.default_price, quantity: cp.quantity} },
      mode: 'payment',
    })
    # render json: session
    render json: {session_url: session.url}, status: 303
  end

  
end