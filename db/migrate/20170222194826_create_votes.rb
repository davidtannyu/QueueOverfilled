class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :author_id, null: false
      t.integer :answer_id, null: false
      t.integer :vote, default: 0
    end

    add_index :votes, :author_id
    add_index :votes, :answer_id
  end
end
