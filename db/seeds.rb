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

pokemon_master = User.create ({
  display_name: "Red",
  email: "iwanttobetheverybest@email.queueoverfilled.com",
  password: "gottacatchemall"
  })

dog = User.create({
  display_name: "Dog",
  email: "notadog@email.queueoverfilled.com",
  password: "baconpancakes"
  })

smartie = User.create ({
  display_name: "Jenius",
  email: "smartparson@email.totallynasa.com",
  password: "thisisthehardestpasswordtoremembereverandthatmakesmeajenius"
  })

Question.destroy_all

lifeQuestion = Question.create({
  title: "The Ultimate Question: Life's Meaning",
  body: "I've been pondering this question for a long time.
  This question has had me perplexed and I'm quite sure that there are others
  who also wonder about this question. What is the meaning of life?",
  author_id: david.id
})

Question.create({
  title: "The count of all pokemon up till today",
  body: "How many pokemons are there up to today? There are too many generations
  to keep track of that I completely do not know what to make of it all.",
  author_id: pokemon_master.id
})

Question.create({
  title: "Trying to sign up on this site",
  body: "Hi, I'm new here and trying to sign up. I'm new to the internet and
  unfortunately, I don't know how to navigate this site. How do I sign up?",
  author_id: guest.id
})


Answer.destroy_all

Answer.create({
  body: "This answer has me perplexed but after a millenia of calculations,
  I believe I have the best answer that I could possibly come up with. The
  answer to the meaning of life is 42. I have done multiple simulations and this
  is my best analysis of the answer",
  author_id: david.id,
  question_id: lifeQuestion.id
  })

Answer.create ({
  body: "Woof! {Translation: I believe the meaning to life is chasing squirrels.
  Squirrels are evil and must be chased and barked at. This pursuit is so satisfactory
  I find all other meanings of life meaningless.}",
  author_id: dog.id,
  question_id: lifeQuestion.id
  })

Answer.create ({
  body: "I believe this question cannot be answered. How one can answer such a
  question is by looking at their own themselves and figuring it out that in the
  end it is dependent of their own factors that they have faced in life thus far
  and through these collobrative efforts will one find in oneself the meaning to
  their own lives and not worry about others life. This is what I have discovered
  in my 12 years of life.",
  author_id: smartie.id,
  question_id: lifeQuestion.id
  })
