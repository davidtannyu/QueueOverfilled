import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION } from '../actions/question_actions';
import { RESET_DEFAULT } from '../actions/loading';

export default function questionsReducer (state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return action.question;
    case REMOVE_QUESTION:
      let newState = Object.assign({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  }
}
