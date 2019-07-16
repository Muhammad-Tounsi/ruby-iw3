class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]

    # GET /comments
    def index
        @comments = Comment.paginate(page: params[:page]).order('created_at DESC')
        @sumcomments = Category.count(:id)

        response.set_header("Content-Range", @sumcomments)

        render json: @comments, status: :ok
    end

    # GET /comments/:id
    def show
        render json: @comment, status: :ok
    end

    # POST /comments
    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render json: @comment, status: :ok
        else
            render json: @comment.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /comments/:id
    def update
        if @comment.update(comment_params)
            render json: @comment, status: :ok
        else
            render json: @comment.errors, status: :unprocessable_entity
        end
    end

    # DELETE /comments/:id
    def destroy
        @comment.destroy
        render json: @comment, status: :ok
    end

    private 

    def set_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:name, :message, :article_id)
    end
end
