class ApplicationController < ActionController::Base
  include Pundit
  before_action :authenticate_user!, except: [:index, :show]
  before_action :configure_permitted_parameters, if: :devise_controller?
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:role, :email, :password)}
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:role, :email, :password, :current_password)}
  end

  private

  def user_not_authorized
    flash[:alert] = "Youy are not authorized to perform this action"
    redirect_to root_path
  end

end
