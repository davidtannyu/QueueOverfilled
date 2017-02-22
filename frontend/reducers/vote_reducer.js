import {
  RECEIVE_VOTE } from '../actions/vote_actions';

  export default function votesReducer (state = {}, action) {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_VOTE:
        return Object.assign({}, state, action.vote);
      default:
        return state;
    }
  }
