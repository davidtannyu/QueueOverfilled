## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**AskQuestionContainer**
- QuestionForm
  + TextEditor

**QuestionContainer**
 - QuestionDetail
   + User
 - AnswerIndex
   + Answer
    * User
    * Vote
 - AnswerForm
  + TextEditor

**SearchResultsContainer**
 - Search
 - QuestionIndex
  + QuestionItem

**HomeContainer**
 - QuestionIndex
  + QuestionItem


## Routes
|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
|"/question/ask"| "AskQuestionContainer" |
|"/question/:questionId"|"QuestionContainer"|
|"/search"|"SearchResultsContainer"|
|"/"|"HomeContainer"|
