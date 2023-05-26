class CheckoutsController < ApplicationController
  # Create a PaymentIntent with amount and currency
  def checkout
    Stripe::Checkout::Session.create({
      success_url: 'https://example.com/success',
      line_items: [
        {price: 'price_H5ggYwtDq4fbrJ', quantity: 2},
      ],
      mode: 'payment',
    })
  end
end

