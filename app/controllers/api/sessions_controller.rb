class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: { base: ["Invalid username/password"] }, status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render 'api/users/show'
    else
      render json: { base: ["No current user"]}, status: 404
    end
  end
end
