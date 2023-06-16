class OrdersController < ApplicationController
  def index
    orders = Stripe::Invoice.search({query: "customer:\"#{@current_user.stripe_customer_id}\""})
    render json: orders
  end
end
