json.extract! question, :id, :title, :body, :answers_count
json.created_at question.created_at.to_f
json.updated_at question.updated_at.to_f
