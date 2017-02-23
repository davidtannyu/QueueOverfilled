class Api::AnswersController < ApplicationController

  def index
    @answers = Question.includes(:answers, :answers_authors)
    .find(params[:question_id]).answers
  end

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      @answer.question.save!
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.includes(:author).find(params[:id])
    if @answer
      @answer.question.save!
      render :show
    else
      render json: ["Answer not found"], status: 404
    end
  end

  def update
    @answer = Answer.includes(:author).find(params[:id])
    if current_user
      if @answer.author_id == current_user.id
        @answer.update(answer_params)
        render :show
      else
        render json: ["Not authorized to update answer"], status: 422
      end
    else
      render json: ["Not logged in"], status: 422
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    if current_user
      if @answer.author_id == current_user.id
        @answer.destroy
        render json: @answer
      else
        render json: ["Not authorized to delete answer"], status: 422
      end
    else
      render json: ["Not logged in"], status: 422
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:body, :author_id, :question_id)
  end
end
