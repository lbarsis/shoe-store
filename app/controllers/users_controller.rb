class UsersController < ApplicationController
  skip_before_action :authorize, only: :create
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:fname, :lname, :email, :password, :password_confirmation, :is_admin, :shipping_address, :billing_address)
  end
end
