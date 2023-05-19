class CartsController < ApplicationController
  skip_before_action :authorize, only: [:show]
  def show
    user = User.find(params[:user_id])
    render json: user.cart_products, status: :ok
  end
end
