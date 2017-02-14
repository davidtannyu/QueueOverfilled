import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import * as SessionActions from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.session = SessionApiUtil;
  window.action = SessionActions;
  ReactDOM.render(<h1>Welcome to QueueOverfilled</h1>, root);
});
