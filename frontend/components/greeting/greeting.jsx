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
        <li className="login-button" key="login-button"> <Link to='/login'>Log In</Link> </li>,
        <li className="signup-button" key="signup-button"> <Link to='/signup'>Sign Up</Link> </li>
      ];
    }
    return (
      <ul className="list-links">
        {component}
      </ul>
    );
  }
}
