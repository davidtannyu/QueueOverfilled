# == Schema Information
#
# Table name: votes
#
#  id        :integer          not null, primary key
#  voter_id  :integer          not null
#  answer_id :integer          not null
#  value     :integer          default("0")
#

class Vote < ActiveRecord::Base
  validates :voter, :answer, presence: true
  validates :value, inclusion: { in: -1..1 }

  belongs_to :voter,
  class_name: "User",
  foreign_key: :voter_id,
  inverse_of: :votes

  belongs_to :answer,
  inverse_of: :votes
end
