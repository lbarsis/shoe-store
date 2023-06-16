class StripeWebhooksController < ApplicationController
  skip_before_action :verify_authenticity_token

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

      # Perform actions such as creating an invoice in your database
      invoice = Stripe::Invoice.create({
        customer: customer_id,
        collection_method: 'send_invoice',
        days_until_due: 30,
        custom_fields: [
          {name: 'Checkout Session ID', value: session['id']},
        ],
      })

      # create invoice
      invoice = Stripe::Invoice.finalize_invoice(invoice.id)

    end

    render json: {message: 'Success'}, status: 200
  end
end
