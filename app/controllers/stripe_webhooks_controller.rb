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
        )
    rescue JSON::ParserError => e
        # Invalid payload
        render json: {message: "Invalid"}, status: 400
        return
    rescue Stripe::SignatureVerificationError => e
        # Invalid signature
        render json: {message: "Invalid"}, status: 400
        return
    end

    # Handle the event
    case event.type
    when 'checkout.session.completed'
        session = event.data.object
    # ... handle other event types
    else
        puts "Unhandled event type: #{event.type}"
    end

    head :ok
  end
  
end