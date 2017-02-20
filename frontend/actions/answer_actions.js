import * as AnswerApiUtil from '../util/answer_api_util';
import { receiveErrors } from './error_actions';
import { loading } from './loading';

export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

export const receiveAnswers = (answers) => {
  return {
    type: RECEIVE_ANSWERS,
    answers
  };
};

export const receiveAnswer = (answer) => {
  return {
    type: RECEIVE_ANSWER,
    answer
  };
};

export const fetchAnswer = (id) => dispatch => {
  dispatch(loading());
  return AnswerApiUtil.fetchAnswer(id)
  .then(obj => dispatch( receiveAnswer(obj.answer)),
  errors => dispatch(receiveErrors(errors.responseJSON, "answer")));
};

export const createAnswer = (answer) => dispatch => {
  dispatch(loading());
  return AnswerApiUtil.createAnswer(answer)
  .then(obj => dispatch( receiveAnswer(obj.answer)),
  errors => dispatch(receiveErrors(errors.responseJSON, "answer")));
};

export const updateAnswer = (answer) => dispatch => {
  dispatch(loading());
  return AnswerApiUtil.updateAnswer(answer)
  .then(obj => dispatch( receiveAnswer(obj.answer)),
  errors => dispatch(receiveErrors(errors.responseJSON, "answer")));
};

export const removeAnswer = (answerId) => {
  return {
    type: REMOVE_ANSWER,
    answerId
  };
};

export const deleteAnswer = (id) => dispatch => {
  dispatch(loading());
  return AnswerApiUtil.deleteAnswer(id)
  .then( () => dispatch( removeAnswer(id)),
  errors => dispatch(receiveErrors(errors.responseJSON, "answer")));
};
