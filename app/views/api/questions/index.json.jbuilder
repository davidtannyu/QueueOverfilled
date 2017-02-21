json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! "api/questions/question", question: question
      json.author do
        json.partial! "api/users/user", user: question.author
      end

      if (question.answers_count > 0)
        json.last_answer do
          json.answer_id question.answers.last.id
          json.created_at question.answers.last.created_at.to_f
          json.partial! "api/users/user", user: question.answers_authors.last
        end
      end
    end
  end
end
