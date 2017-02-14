import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Greeting extends Component {
  render() {
    const { currentUser, logout } = this.props;
    let component;
    if ( currentUser ) {
      component = [
          <li key="greeting-user"> Hi { currentUser.email }</li>,
          <li key="logout-button"> <button onClick={logout}>Logout</button> </li>
        ];
    }
    else {
      component = [
        <li key="signup-button"> <Link to='/signup'>Signup</Link> </li>,
        <li key="login-button"> <Link to='/login'>Login</Link> </li>
      ];
    }
    return (
      <ul>
        {component}
      </ul>
    );
  }
}
