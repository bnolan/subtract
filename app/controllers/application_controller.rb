class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user

  private

  def user_required
    if current_user.nil?
      render :text => "You must log in to access this resource"
    end
  end
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
