class UsersController < ApplicationController
    skip_before_action :authorize_request, only: [:create, :index]

    # POST /signup
    # return authenticated token upon signup
    def create
        user = User.create!(user_params)
        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { message: Message.account_created, auth_token: auth_token }
        json_response(response, :created)
    end

    # GET /users
    def index
        @users = User.paginate(page: params[:page]).order('created_at DESC')
        @sumusers = User.count(:id)
        response.set_header("Content-Range", @sumusers)

        render json: @users, status: :ok
    end

    # GET /users/:id
    def show
        render json: @user, status: :ok
    end

    # PATCH/PUT /users/:id
    def update
        if @user.update(user_params)
            render json: @user, status: :ok
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    # DELETE /users/:id
    def destroy
        @user.destroy
        render json: @user, status: :ok
    end

    private

    def user_params
        params.permit(
            :name,
            :email,
            :password,
            :password_confirmation
        )
    end
end