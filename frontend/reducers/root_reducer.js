import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import errorsReducer from './error_reducer';
import questionsReducer from './question_reducer';
import answersReducer from './answer_reducer';
import votesReducer from './vote_reducer';
import loadingReducer from './loading_reducer';


const rootReducer = combineReducers({
  currentUser: usersReducer,
  forms: errorsReducer,
  questions: questionsReducer,
  answers: answersReducer,
  votes: votesReducer,
  loading: loadingReducer
});

export default rootReducer;
