import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = (props) => {
  const { children } = props;
  return (
    <div >
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
      <div className="children">
        { children }
      </div>
      <div className="footer">
        <a href="#">about us</a>
        <a href="#">tour</a>
        <a href="#">help</a>
        <a href="#">blog</a>
        <a href="#">chat</a>
        <a href="#">data</a>
        <a href="#">legal</a>
        <a href="#">privacy policy</a>
        <a href="#">work here</a>
        <a href="#">advertising info</a>
        <a href="#">developers jobs directory</a>
        <a href="#">mobile</a>
        <a href="#"><strong>contact us</strong></a>
        <a href="#"><strong>feedback</strong></a>
      </div>
    </div>
  );
};

export default App;
