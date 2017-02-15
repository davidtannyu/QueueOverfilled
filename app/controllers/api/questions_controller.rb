class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
    if @question
      render :show
    else
      render json: ["Question not found"], status: 404
    end
  end

  def update
    @question = Question.find(params[:id])
    if current_user
      if @question.author_id == current_user.id
        @question.update(question_params)
        render :show
      else
        render json: ["Not authorized to update question"], status: 422
      end
    else
      render json: ["Not logged in"], status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    if current_user
      if @question.author_id == current_user.id
        @question.destroy
        render json: @question
      else
        render json: ["Not authorized to delete question"], status: 422
      end
    else
      render json: ["Not logged in"], status: 422
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body, :author_id)
  end
end
