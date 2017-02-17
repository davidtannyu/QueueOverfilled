class ChangeBodyToText < ActiveRecord::Migration
  def change
    change_column :answers, :body, :text
  end
end
