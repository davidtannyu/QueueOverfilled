class Api::VotesController < ApplicationController

  def index
    @votes = Answer
    .find(params[:answer_id])
    .votes
    .where(voter_id: params[:voterId])

    render json: @votes
  end

  def create
    @vote = Vote.new(vote_params)
    Vote.transaction do
      begin
        @vote.save!
        answer = @vote.answer
        answer.vote_count += @vote.value
        answer.save!
        render json: @vote
      rescue
        render json: @vote.errors.full_messages, status: 422
      end
    end
  end

  def update
    @vote = Vote.find(params[:id])
    if current_user
      if current_user.id == @vote.voter_id
        old_vote = @vote.value
        Vote.transaction do
          begin
            @vote.update(vote_params)
            answer = @vote.answer
            answer.vote_count -= old_vote
            answer.vote_count += @vote.value
            answer.save!
            render json: @vote
          rescue
            render json: @vote.errors.full_messages, status: 422
          end
        end
      else
        render json: ["Not authorized to update answer"], status: 422
      end
    else
      render json: ["Not logged in"], status: 422
    end
  end

  private
  def vote_params
    params.require(:vote).permit(:value, :voter_id, :answer_id)
  end
end
