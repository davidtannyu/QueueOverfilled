import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Greeting extends Component {
  render() {
    const { currentUser, logout } = this.props;
    let component;
    if ( currentUser ) {
      component = [
          <li key="greeting-user">
            <a>
            Hi { currentUser.display_name }
            </a>
          </li>,
          <li key="logout-button">
            <button className="blue-button" onClick={logout}>
              Log out
            </button>
          </li>
        ];
    }
    else {
      component = [
        <li className="login-button" key="login-button">
          <Link to='/login'>Log In</Link>
        </li>,
        <li className="signup-button blue-button" key="signup-button">
          <Link to='/signup'>Sign Up</Link>
        </li>
      ];
    }
    return (
      <ul className="list-links">
        {component}
      </ul>
    );
  }
}
