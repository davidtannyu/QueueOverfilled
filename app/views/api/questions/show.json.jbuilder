json.question do
  json.set! @question.id do
    json.partial! "api/questions/question", question: @question
  end
end

# json.answers do
#   @questions.answers.each do |answer|
#     json.set! answer.id do
#
#     end
# end
