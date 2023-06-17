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
        status 400
        return
    rescue Stripe::SignatureVerificationError => e
        # Invalid signature
        status 400
        return
    end

    # Handle the event
    puts "Unhandled event type: #{event.type}"

    status 200
  end
  
end