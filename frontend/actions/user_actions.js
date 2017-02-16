import * as SessionApiUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors.responseJSON, "logIn")));
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout()
  .then(() => dispatch(receiveCurrentUser(null)),
        errors => dispatch(receiveErrors(errors.responseJSON, "logOut")))
  .then(() => hashHistory.push("/"));
};


export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors.responseJSON, "signUp")));
};

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
