class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :destroy]

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

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
