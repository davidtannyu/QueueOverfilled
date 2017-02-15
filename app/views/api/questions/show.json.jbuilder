json.question do
  json.set! @question.id do
    json.partial! "api/questions/question", question: @question
    json.author do
      json.partial! "api/users/user", user: @question.author
    end
  end
end

# json.answers do
#   @questions.answers.each do |answer|
#     json.set! answer.id do
#
#     end
# end
