class StripeWebhooksController < ApplicationController
  # skip_before_action :verify_authenticity_token
  skip_before_action :authorize, only: [:create]

  def create
    payload = request.body.read
    sig_header = request.env['HTTP_STRIPE_SIGNATURE']
    event = nil

    begin
      event = Stripe::Webhook.construct_event(
          payload, sig_header, Rails.application.credentials.stripe[:webhook]
          # payload, sig_header, "whsec_45853b87fe1310cbafcd961b2094336822f8f5909583225de49f004ab9240e1a"
      )
    rescue JSON::ParserError => e
      # Invalid payload
      render json: {message: "Invalid"}, status: :bad_request
      return
    rescue Stripe::SignatureVerificationError => e
      # Invalid signature
      render json: {message: "Invalid"}, status: :bad_request
      return
    end

    # Handle the event
    case event.type
    when 'checkout.session.completed'
      session = event.data.object
    
      # Get user, total amount, addresses, products, and quantities from the session or elsewhere
      user = User.find_by(stripe_customer_id: session.customer)
      total = session.amount_total
      shipping_address = user.shipping_address  # or get from session
      billing_address = user.billing_address  # or get from session
      stripe_payment_intent_id = session.payment_intent
      
      cart = Cart.find_by(user_id: user.id)
      product_quantities = {}
      cart.cart_products.each do |cart_product|
        product_quantities[cart_product.product_id] = cart_product.quantity
      end
    
      create_order(user, total, shipping_address, billing_address, stripe_payment_intent_id, product_quantities)
      cart.cart_products.destroy_all
    
    else
      puts "Unhandled event type: #{event.type}"
    end

    head :ok
  end
  
  private

  # Define a method to handle order creation
  def create_order(user, total, shipping_address, billing_address, stripe_payment_intent_id, product_quantities)
    Order.transaction do
      # Create an order
      order = Order.create!(
        user: user,
        total: total,
        shipping_address: shipping_address,
        billing_address: billing_address,
        stripe_payment_intent_id: stripe_payment_intent_id
      )

      # Create order products
      product_quantities.each do |product_id, quantity|
        OrderProduct.create!(
          order: order,
          product_id: product_id,
          quantity: quantity
        )
      end
    end
  rescue ActiveRecord::RecordInvalid => e
    puts "Failed to create order: #{e.message}"
  end

end