class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy, :get_comments]


    # GET /articles
    def index
        @articles = Article.paginate(page: params[:page]).order('id ASC').all
        @sumarticle = Article.count(:id)

        response.set_header("Content-Range", @sumarticle)

        render json: @articles, status: :ok 
    end

    # GET /articles/:id
    def show
        render json:  @article, status: :ok
    end

    # POST /articles
    def create
        @article = Article.new(article_params)

        if @article.save
            render json: @article, status: :created
        else
            render json: @article.errors, status: :bad_request
        end
    end

    # PATCH/PUT /articles/:id
    def update
        if @article.update(article_params)
            render json: @article, status: :ok
        else
            render json: @article.errors, status: :unprocessable_entity
        end
    end

    # DELETE /articles/:id
    def destroy
        @article.destroy
        render json: @article, status: :ok
    end

    # GET /articles/:id/comments
    def get_comments
        render json: @article.comments
    end

    private

    def set_article
        @article = Article.find(params[:id])
    end

    def article_params
        params.permit(:title, :content, :created_by, :category_id)
    end

end
