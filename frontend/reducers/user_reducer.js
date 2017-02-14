import { RECEIVE_CURRENT_USER } from '../actions/user_actions';

const defaultState = {};

export default function usersReducer(state = defaultState, action ) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
}
