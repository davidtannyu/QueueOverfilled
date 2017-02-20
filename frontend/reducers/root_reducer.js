import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import errorsReducer from './error_reducer';
import questionsReducer from './question_reducer';
import answersReducer from './answer_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  currentUser: usersReducer,
  forms: errorsReducer,
  questions: questionsReducer,
  answers: answersReducer,
  loading: loadingReducer
});

export default rootReducer;
