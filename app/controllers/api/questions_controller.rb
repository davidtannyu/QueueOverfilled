class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render :show
    else
      render json: ["Invalid question"], status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
    if @question
      render :show
    else
      render json: ["No such question"], status: 404
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body, :author_id)
  end
end
