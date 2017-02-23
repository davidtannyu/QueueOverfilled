class RenameVoteColumn < ActiveRecord::Migration
  def change
    rename_column :votes, :vote, :value
    rename_column :votes, :author_id, :voter_id
  end
end
