class StripeWebhooksController < ApplicationController
  # skip_before_action :verify_authenticity_token
  skip_before_action :authorize, only: [:create]

  def create
    payload = request.body.read
    sig_header = request.env['HTTP_STRIPE_SIGNATURE']
    event = nil

    begin
      event = Stripe::Webhook.construct_event(
        # payload, sig_header, Rails.application.credentials.stripe[:webhook]
        payload, sig_header, Rails.application.credentials.stripe[:webhook]
      )
    rescue JSON::ParserError => e
      # Invalid payload
      render json: {message: e.message}, status: 400
      return
    rescue Stripe::SignatureVerificationError => e
      # Invalid signature
      render json: {message: e.message}, status: 400
      return
    end

    # Handle the checkout.session.completed event
    if event['type'] == 'checkout.session.completed'
      session = event['data']['object']

      line_items = session['line_items']['data']
      total_amount = line_items.sum { |item| item['amount_total'] }
      customer_id = session['customer']

      user = User.find_by_stripe_customer_id(customer_id)
      order = user.orders.create!(total: total_amount, order_products: line_items)
      @current_user.cart.cart_products.destroy_all

    end

    render json: {message: 'Success'}, status: 200
  end
end
