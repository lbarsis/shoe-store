class OrdersController < ApplicationController

  def index
    orders = @current_user.orders
    render json: orders, status: :ok
  end

end
