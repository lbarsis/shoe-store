class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]
  def index
    users = User.all
    render json: users
  end

  def create
    # user = User.create!(user_params)
    # user.create_cart
    # session[:user_id] = user.id
    # render json: user, status: :created
    user = User.new(user_params)
    if user.save
      Stripe::Customer.create({
        name: "#{user_params[:fname]} #{user_params[:lname]}",
        email: user_params[:email],
        metadata:{
          user_id: user.id
        }
      })

      user.create_cart

      session[:user_id] = user.id
      render json: { status: 'User created successfully' }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :email, :is_admin, :password, :password_confirmation)
  end
end
