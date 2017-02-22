import {
  RECEIVE_VOTE,
  RECEIVE_VOTES } from '../actions/vote_actions';

  export default function votesReducer (state = {}, action) {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_VOTES:
        return action.votes;
      case RECEIVE_VOTE:
        return Object.assign({}, state, action.vote);
      default:
        return state;
    }
  }
