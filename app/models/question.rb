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
  validates :title, :body, :author, presence: true
  validates :title, length: { minimum: 15 }
  validates :body, length: { minimum: 30 }

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id,
  inverse_of: :questions

  has_many :answers, dependent: :destroy

  has_many :answers_authors,
  through: :answers,
  source: :author
end
