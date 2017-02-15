import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import errorsReducer from './error_reducer';
import questionsReducer from './question_reducer';

const rootReducer = combineReducers({
  currentUser: usersReducer,
  forms: errorsReducer,
  questions: questionsReducer
});

export default rootReducer;
