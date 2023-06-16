class OrdersController < ApplicationController
  def index
    orders = @current_user.orders
    render json: orders
  end
end
