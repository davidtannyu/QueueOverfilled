# QueueOverfilled

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/M3oayMkQ/queueoverfilled

## Minimum Viable Product

QueueOverfilled is a web app inspired by StackOverflow built using Ruby on Rails
and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [] Hosting on Heroku
- [] New account creation, login, and guest/demo login
- [] Ask Questions
  - [] Simply Text Editor and Submission
  - [] Rich Text Editor
- [] Answer Questions (using above Rich Text Editor)
- [] Search for Questions
- [] Upvote / Downvote Answers
- [] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes/
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Design Docs

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Questions model, API and components ( 1 day )

**Objective:** Questions can be created, read, edited and deleted through an API

### Phase 3: Answers model, API and components ( 1 day )

**Objective:** Answers can be created, read, edited and deleted through an API

### Phase 4: Text Editor Form ( 2 days )

**Objective:** Text editor form will allow for rich text formats

### Phase 5: Search for Questions ( 1 day )

**Objective:** Allows for searching of questions

### Phase 6: - Upvote / Downvote Answers ( 1 day )

**Objective:** Can upvote and downvote answers

### Bonus Features (TBD)

- [] Question Categories
- [] Comments on Questions / Answers
- [] Polymorphic Up/Down Votes: Questions, Answers, Comments
- [] Code Snippets in Answers
- [] Undo / Redo in rich text editor
