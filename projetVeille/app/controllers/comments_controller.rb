class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]

    # GET /comments
    def index
        @comments = Comment.paginate(page: params[:page], per_page: 5).order('created_at DESC')

        render json: {status: 'SUCCESS', message: 'Loaded comments', data: @comments}, status: :ok
    end

    # GET /comments/:id
    def show
        render json: {status: 'SUCCESS', message: 'Loaded comment', data: @comment}, status: :ok
    end

    # POST /comments
    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render json: {status: 'SUCCESS', message: 'Saved comment', data: @comment}, status: :ok
        else
            render json: {status: 'ERROR', message: 'Comment not saved', data: @comment.errors}, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /comments/:id
    def update
        if @comment.update(comment_params)
            render json: {status: 'SUCCESS', message: 'Updated comment', data: @comment}, status: :ok
        else
            render json: {status: 'ERROR', message: 'Comment not updated', data: @comment.errors}, status: :unprocessable_entity
        end
    end

    # DELETE /comments/:id
    def destroy
        @comment.destroy
        render json: {status: 'SUCCESS', message: 'Deleted comment', data: @comment}, status: :ok
    end

    private 

    def set_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:name, :message, :article_id)
    end
end