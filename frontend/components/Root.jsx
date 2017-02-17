
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import SessionFormContainer from './session_form/session_form_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionFormContainer from './question/question_form_container';
import QuestionContainer from './question/question_container';
import { resetErrors } from '../actions/error_actions';

const Root = (props) => {
  const {store} = props;

  function redirectIfLoggedIn(nextState, replace) {
    if (store.getState().currentUser) {
      replace("/");
    }
    store.dispatch(resetErrors());
  }

  function ensureLoggedIn(nextState, replace) {
    if (!store.getState().currentUser) {
      replace("/logIn");
    }
    store.dispatch(resetErrors());
  }

  return (
    <Provider store = {store}>
      <Router history={hashHistory}>
        <Route path="/" component={ App }>
          <IndexRoute component={ QuestionIndexContainer } />
          <Route path="/login"
            formType="logIn"
            component= {SessionFormContainer}
            onEnter={redirectIfLoggedIn} />
          <Route path="/signup"
            formType="signUp"
            component= {SessionFormContainer}
            onEnter={redirectIfLoggedIn}  />
          <Route path="/questions/ask"
            formType="new"
            component={QuestionFormContainer}
            onEnter={ensureLoggedIn} />
          <Route path="/questions/:id"
            component={QuestionContainer} />
          <Route path="/questions/:id/edit"
            formType="edit"
            component={QuestionFormContainer}
            onEnter={ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
