require 'rails_helper'

RSpec.describe Comment, type: :model do
  it { should belong_to(:article) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:message) }
  it { should validate_presence_of(:article_id) }
end