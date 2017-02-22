# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Questions

- `GET /api/questions`
  - Questions index/search
  - accepts `title` query param
- `POST /api/questions`
- `GET /api/questions/:id`
- `PATCH /api/questions/:id`  
- `DELETE /api/questions/:id`

- `GET /api/questions/:question_id/answers`
  - index of all answers for a question

### Answers

- `POST /api/answers`
- `GET /api/answers/:id`
- `DELETE /api/answers/:id`
- `PATCH /api/answers/:id`

### Upvote / Downvote

- `POST /api/votes`
- `PATCH /api/votes/:id`
