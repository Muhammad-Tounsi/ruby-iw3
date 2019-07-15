class Article < ApplicationRecord
    validates_presence_of :title, :content, :created_by, :category_id

    has_many :comments, dependent: :destroy
    belongs_to :category
end
