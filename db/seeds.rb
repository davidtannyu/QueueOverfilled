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

User.create({
  display_name: "Guest",
  email: "guest@email.queueoverfilled.com",
  password: "111111"
})

Question.create({
  title: "Life's Meaning",
  body: "What is the meaning of life?",
  author_id: david.id
})
