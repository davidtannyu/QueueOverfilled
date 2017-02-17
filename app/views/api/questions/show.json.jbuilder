json.question do
  json.set! @question.id do
    json.partial! "api/questions/question", question: @question
    json.author do
      json.partial! "api/users/user", user: @question.author
    end
  end
end

json.answers do
  @question.answers.each_with_index do |answer, idx|
    json.set! answer.id do
      json.partial! "api/answers/answer", answer: answer
      json.author do
        json.partial! "api/users/user", user: @question.answers_authors[idx]
      end
    end
  end
end
