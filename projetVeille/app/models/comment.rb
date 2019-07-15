class Comment < ApplicationRecord
    validates_presence_of :name, :message, :article_id

    belongs_to :article
end
