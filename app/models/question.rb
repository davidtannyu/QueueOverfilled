# == Schema Information
#
# Table name: questions
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  body          :text             not null
#  author_id     :integer          not null
#  created_at    :datetime
#  updated_at    :datetime
#  answers_count :integer          default("0")
#

class Question < ActiveRecord::Base
  validates :title, :body, :author_id, presence: true

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id

  has_many :answers
end
