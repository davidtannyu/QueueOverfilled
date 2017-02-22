import * as QuestionApiUtil from '../util/question_api_util';
import { receiveErrors } from './error_actions';
import { receiveAnswers } from './answer_actions';
import { loading } from './loading';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const INCREMENT_ANSWER_COUNT = "INCREMENT_ANSWER_COUNT";
export const DECREMENT_ANSWER_COUNT = "DECREMENT_ANSWER_COUNT";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export const fetchQuestions = (search) => dispatch => {
  return QuestionApiUtil.fetchQuestions(search)
  .then(obj => dispatch( receiveQuestions(obj.questions)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const receiveQuestion = (question) => {
  return {
    type: RECEIVE_QUESTION,
    question
  };
};

export const fetchQuestion = (id) => dispatch => {
  dispatch(loading());
  return QuestionApiUtil.fetchQuestion(id)
  .then(obj => {
    dispatch( receiveQuestion(obj.question));
    let answers = obj.answers;
    if (!answers) {
      answers = {};
    }
    dispatch( receiveAnswers(answers));
    return obj.question[id];
  },
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const createQuestion = (question) => dispatch => {
  dispatch(loading());
  return QuestionApiUtil.createQuestion(question)
  .then(obj => dispatch( receiveQuestion(obj.question)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const updateQuestion = (question) => dispatch => {
  dispatch(loading());
  return QuestionApiUtil.updateQuestion(question)
  .then(obj => dispatch( receiveQuestion(obj.question)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const removeQuestion = (questionId) => {
  return {
    type: REMOVE_QUESTION,
    questionId
  };
};

export const deleteQuestion = (id) => dispatch => {
  dispatch(loading());
  return QuestionApiUtil.deleteQuestion(id)
  .then( () => dispatch( removeQuestion(id)),
  errors => dispatch(receiveErrors(errors.responseJSON, "question")));
};

export const incrementAnswerCount = (questionId) => {
  return {
    type: INCREMENT_ANSWER_COUNT,
    questionId
  };
};

export const decrementAnswerCount = (questionId) => {
  return {
    type: DECREMENT_ANSWER_COUNT,
    questionId
  };
};
