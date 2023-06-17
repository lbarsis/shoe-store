class StripeWebhooksController < ApplicationController
  # skip_before_action :verify_authenticity_token
  skip_before_action :authorize, only: [:create]

  def create
    render json: @current_user
  end
  
end