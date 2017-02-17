import {
  RECEIVE_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWER } from '../actions/answer_actions';

export default function answersReducer (state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANSWERS:
      return action.answers;
    case RECEIVE_ANSWER:
      return Object.assign({}, state, action.answer);
    case REMOVE_ANSWER:
      let newState = Object.assign({}, state);
      delete newState[action.answerId];
      return newState;
    default:
      return state;
  }
}
