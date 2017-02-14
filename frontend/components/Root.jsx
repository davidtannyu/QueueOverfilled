
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import SessionFormContainer from './session_form/session_form_container';


const Root = (props) => {
  const {store} = props;

  function redirectIfLoggedIn(nextState, replace) {
    if (store.getState().currentUser) {
      replace("/");
    }
  }

  return (
    <Provider store = {store}>
      <Router history={hashHistory}>
        <Route path="/" component={ App }>
          <Route path="/login"
            formType="logIn"
            component= {SessionFormContainer}
            onEnter={redirectIfLoggedIn} />
          <Route path="/signup"
            formType="signUp"
            component= {SessionFormContainer}
            onEnter={redirectIfLoggedIn}  />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
