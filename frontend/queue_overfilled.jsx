import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let preloadedState = {};
  let currentUser = window.currentUser;
  if (currentUser) {
    preloadedState = { currentUser };
  }
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});
