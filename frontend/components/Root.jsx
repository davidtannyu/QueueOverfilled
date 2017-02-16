
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import SessionFormContainer from './session_form/session_form_container';
import QuestionIndexContainer from './question/question_index_container';
import AskQuestionContainer from './question/ask_question_container';
import QuestionContainer from './question/question_container';

const Root = (props) => {
  const {store} = props;

  function redirectIfLoggedIn(nextState, replace) {
    if (store.getState().currentUser) {
      replace("/");
    }
  }

  function ensureLoggedIn(nextState, replace) {
    if (!store.getState().currentUser) {
      replace("/logIn");
    }
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
            component={AskQuestionContainer}
            onEnter={ensureLoggedIn} />
          <Route path="/questions/:id"
            component={QuestionContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
