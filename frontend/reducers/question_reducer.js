import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  INCREMENT_ANSWER_COUNT } from '../actions/question_actions';

export default function questionsReducer (state = {}, action) {
  let newState = Object.assign({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return action.question;
    case REMOVE_QUESTION:
      delete newState[action.questionId];
      return newState;
    case INCREMENT_ANSWER_COUNT:
      newState[action.questionId].answers_count += 1;
      return newState;
    default:
      return state;
  }
}
