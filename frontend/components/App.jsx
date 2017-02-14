import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <h1 className="logo">
            <Link to="/">
              Queue <strong>Overfilled</strong>
            </Link>
          </h1>
        </div>
        <div className="navbar-right">
          <GreetingContainer />
        </div>
      </div>
      { children }
    </div>
  );
};

export default App;
