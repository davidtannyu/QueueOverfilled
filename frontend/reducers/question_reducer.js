import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION } from '../actions/question_actions';

export default function questionsReducer (state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      let newQuestion = { [action.question.id]: action.question};
      return  Object.assign({}, state, newQuestion);
    case REMOVE_QUESTION:
      let newState = Object.assign({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  }
}
