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
      @question.answers_authors.each do |author|
        if (author.id == answer.author_id)
          json.author do
            json.partial! "api/users/user", user: author
          end
          break
        end
      end
    end
  end
end

json.votes do
  if (@votes)
    @votes.each do |vote|
      json.set! vote.id do
        json.extract! vote, :id, :value, :voter_id, :answer_id
      end
    end
  end
end
