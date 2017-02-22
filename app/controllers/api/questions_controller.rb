class Api::QuestionsController < ApplicationController

  def index
    @questions = Question
    .includes(:author, :answers, :answers_authors)
    .all
    if (search)
      @questions = @questions
        .where("lower(title) LIKE ?", "%#{search[:title].downcase}%")
    end
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
    @question = Question
    .includes(:author, :answers, :answers_authors, :answers_votes)
    .find(params[:id])

    if (params[:voterId])
      @votes = @question.answers_votes.where(voter_id: params[:voterId])
    end
    if @question
      render :show
    else
      render json: ["Question not found"], status: 404
    end
  end

  def update
    @question = Question.includes(:author).find(params[:id])
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

  def search
    params[:search]
  end
end
