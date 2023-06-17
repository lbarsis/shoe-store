class OrdersController < ApplicationController

  def index
    synchronize_orders
    orders = @current_user.orders
    render json: orders, status: :ok
  end

  private

  def fetch_payment_intents(stripe_customer_id)
    Stripe::PaymentIntent.search({
      query: "status:\'succeeded\' AND customer:\"#{stripe_customer_id}\"",
    })
  end

  def create_order_products(order, line_items)
    line_items.each do |line_item|
      OrderProduct.create(
        order_id: order.id,
        product_id: line_item.product_id,
        quantity: line_item.quantity,
        price: line_item.price
      )
    end
  end

  def synchronize_orders
    payment_intents = fetch_payment_intents(@current_user.stripe_customer_id)
    
    payment_intents.each do |payment_intent|
      next if Order.exists?(stripe_payment_intent_id: payment_intent.id)
      line_items = 
      
      order = Order.create(
        user_id: @current_user.id,
        stripe_payment_intent_id: payment_intent.id,
        total: payment_intent.amount,
        # ... any other fields you want to set
      )

      create_order_products(order)
    end
  end
end
