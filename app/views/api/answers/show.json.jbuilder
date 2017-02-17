json.answer do
  json.set! @answer.id do
    json.partial! "api/answers/answer", answer: @answer
    json.author do
      json.partial! "api/users/user", user: @answer.author
    end
  end
end
