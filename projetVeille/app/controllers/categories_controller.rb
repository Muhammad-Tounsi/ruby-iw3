class CategoriesController < ApplicationController
	before_action :set_category, only: [:show, :update, :destroy, :get_articles]

	# GET /categories
    def index
        @categories = Category.paginate(page: params[:page], per_page: 5).order('created_at DESC')

        json_response(@categories)
    end

    # GET /categories/:id
    def show
        json_response(@category)
    end

    # POST /categories
    def create
        @category = Category.create!(category_params)
        json_response(@category, :created)
    end

    # PATCH/PUT /categories/:id
    def update
        @category.update(category_params)
        head :no_content
    end

    # DELETE /categories/:id
    def destroy
        @category.destroy
        head :no_content
    end

    # GET /categories/:id/articles
    def get_articles
        render json: @category.articles
    end

    private

    def set_category
        @category = Category.find(params[:id])
    end

    def category_params
        params.permit(:title)
    end
end