import { RECEIVE_ERRORS, DEFAULT_ERRORS } from '../actions/error_actions';
import { RESET_DEFAULT } from '../actions/loading';


export default function errorsReducer(state = DEFAULT_ERRORS, action ) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      let newErrors = {[action.formType]: { errors: action.errors}};
      return Object.assign({}, DEFAULT_ERRORS, newErrors );
    case RESET_DEFAULT:
      return DEFAULT_ERRORS;
    default:
      return state;
  }
}
