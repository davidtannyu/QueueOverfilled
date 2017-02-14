import { RECEIVE_ERRORS } from '../actions/error_actions';

const defaultState = {
  signUp: {errors: []},
  logIn: {errors: []},
  logOut: {errors: []},
  question: {errors: []},
  answer: {errors: []}
};

export default function usersReducer(state = defaultState, action ) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      let newErrors = {[action.formType]: { errors: action.errors}};
      return Object.assign({}, defaultState, newErrors );
    default:
      return state;
  }
}
