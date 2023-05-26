class CheckoutsController < ApplicationController
  # Create a PaymentIntent with amount and currency
  def checkout
    session = Stripe::Checkout::Session.create({
      line_items: [{
        # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      }],
      mode: 'payment',
      success_url: YOUR_DOMAIN + '?success=true',
      cancel_url: YOUR_DOMAIN + '?canceled=true',
    })
    redirect session.url, 303
  end
end

