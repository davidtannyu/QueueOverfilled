# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

david = User.create({
  display_name: "David Tan",
  email: "dt1041@nyu.edu",
  password: "111111"
})

guest = User.create({
  display_name: "Guest",
  email: "guest@email.queueoverfilled.com",
  password: "111111"
})

Question.destroy_all

lifeQuestion = Question.create({
  title: "Life's Meaning",
  body: "What is the meaning of life?",
  author_id: david.id
})

Question.create({
  title: "Pokeman",
  body: "How many pokeman are there?",
  author_id: david.id
})

Question.create({
  title: "How do I sign up?",
  body: "Hi, I'm new here. How do I sign up?",
  author_id: guest.id
})


Answer.destroy_all

Answer.create({
  body: "42",
  author_id: david.id,
  question_id: lifeQuestion.id
  })
