class Question < ActiveRecord::Base
  validates :title, :body, :author_id, presence: true

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id
end
