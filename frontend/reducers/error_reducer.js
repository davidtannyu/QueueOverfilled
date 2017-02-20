import { RECEIVE_ERRORS, DEFAULT_ERRORS } from '../actions/error_actions';


export default function errorsReducer(state = DEFAULT_ERRORS, action ) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      let newErrors = {[action.formType]: { errors: action.errors}};
      return Object.assign({}, DEFAULT_ERRORS, newErrors );
    default:
      return state;
  }
}
