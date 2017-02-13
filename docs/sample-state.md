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
    question: {errors: ["title can't be blank"]},
    answer: {errors: []}
  },
  questions: {
    1: {
      title: "Line Up",
      body: "How do I line up on this queue?",
      author_id: 1
    }
  },
  answers: {
    3: {
      author_id: 1,
      question_id: 1,
      body: "Get in the back"
    }
  },
  votes: {
    35: {
      author_id: 1,
      answer_id: 3,
      value: 1
    },
    36: {
      author_id: 2,
      answer_id: 3,
      value: -1
    }
  }
}
```
