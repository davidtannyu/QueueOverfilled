# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  body        :string           not null
#  vote_count  :integer          default("0")
#  author_id   :integer          not null
#  question_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Answer < ActiveRecord::Base
  validates :body, :author_id, :question_id, presence: true

  belongs_to :question,
  counter_cache: true

  belongs_to :author,
  class_name: "User"
end
