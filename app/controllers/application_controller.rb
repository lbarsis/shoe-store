class ApplicationController < ActionController::API
    include ActionController::Cookies
    wrap_parameters false
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
  
    private
  
    def authorize
      @current_user = User.find_by(id: session[:user_id])
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end
  
    def require_admin
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user.is_admin?
    end
  
    def render_unprocessable_entity_response(exception)
      # byebug
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
