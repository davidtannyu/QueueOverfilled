import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

import * as SessionApiUtil from './util/session_api_util';
import * as SessionActions from './actions/user_actions';
import * as QuestionApiUtil from './util/question_api_util';
import * as QuestionActions from './actions/question_actions';
import * as AnswerApiUtil from './util/answer_api_util';
import * as AnswerActions from './actions/answer_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let preloadedState = {};
  let currentUser = window.currentUser;
  if (currentUser) {
    preloadedState = { currentUser };
  }
  const store = configureStore(preloadedState);
  window.store = store;
  window.session = SessionApiUtil;
  window.action = SessionActions;
  window.questionAction = QuestionActions;
  window.question = QuestionApiUtil;
  window.answer = AnswerApiUtil;
  window.answerAction = AnswerActions;
  ReactDOM.render(<Root store={store} />, root);
});
