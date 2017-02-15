json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! "api/questions/question", question: question
      json.author do
        json.partial! "api/users/user", user: question.author
      end
    end
  end
end
