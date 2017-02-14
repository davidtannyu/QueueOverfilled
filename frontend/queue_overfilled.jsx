import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

import * as SessionApiUtil from './util/session_api_util';
import * as SessionActions from './actions/user_actions';


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
  ReactDOM.render(<Root store={store} />, root);
});