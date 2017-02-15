```js
{
  currentUser: {
    id: 1,
    displayname: "guest",
    email: "queueoverfilledguest@gmail.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    logOut: {errors: []},
    question: {errors: ["title can't be blank"]},
    answer: {errors: []}
  },
  questions: {
    1: {
      id: 1,
      title: "Line Up",
      body: "How do I line up on this queue?",
      author_id: 1,
      answers_count: 2
    }
  },
  answers: {
    3: {
      author_id: 1,
      question_id: 1,
      vote_count: 214,
      body: "Get in the back"
    },
    4: {
      author_id: 2,
      question_id: 1,
      vote_count: -24,
      body: "You can cut in front of me"
    }
  },
  votes: {
    35: {
      author_id: 1,
      answer_id: 3,
      value: 1
    },
    36: {
      author_id: 1,
      answer_id: 4,
      value: -1
    }
  }
}
```
