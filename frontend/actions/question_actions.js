import * as QuestionApiUtil from '../util/question_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export const fetchQuestions = () => dispatch => {
  return QuestionApiUtil.fetchQuestions()
  .then(questions => dispatch( receiveQuestions(questions)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const receiveQuestion = (question) => {
  return {
    type: RECEIVE_QUESTION,
    question
  };
};

export const fetchQuestion = (id) => dispatch => {
  return QuestionApiUtil.fetchQuestion(id)
  .then(question => dispatch( receiveQuestion(question)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const createQuestion = (question) => dispatch => {
  return QuestionApiUtil.createQuestion(question)
  .then(question => dispatch( receiveQuestion(question)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const updateQuestion = (question) => dispatch => {
  return QuestionApiUtil.updateQuestion(question)
  .then(question => dispatch( receiveQuestion(question)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const removeQuestion = (questionId) => {
  return {
    type: REMOVE_QUESTION,
    questionId
  };
};

export const deleteQuestion = (id) => dispatch => {
  return QuestionApiUtil.deleteQuestion(id)
  .then( () => dispatch( removeQuestion(id)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};
