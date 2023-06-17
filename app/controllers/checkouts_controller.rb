class CheckoutsController < ApplicationController
  # Create a PaymentIntent with amount and currency
  def checkout
    begin
      session = Stripe::Checkout::Session.create({
        success_url: 'http://localhost:4000/',
        cancel_url: 'https://steppers.onrender.com/',
        customer: @current_user.stripe_customer_id,
        line_items: @current_user.cart_products.map { |cp| {price: cp.product.default_price, quantity: cp.quantity} },
        mode: 'payment',
      })
  
      render json: {session_url: session.url}, status: 303
    rescue => e
      # Log the error for debugging purposes
      Rails.logger.error "Stripe error while creating checkout session: #{e.message}"
  
      # Return a generic error to the front-end
      render json: {error: "There was an error while trying to create a checkout session. Please try again."}, status: 500
    end
  end
end