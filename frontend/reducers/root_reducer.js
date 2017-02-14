import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import errorsReducer from './error_reducer';

const rootReducer = combineReducers({
  currentUser: usersReducer,
  forms: errorsReducer
});

export default rootReducer;
