import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import RootLink from './root_link';

const App = (props) => {
  const { children } = props;
  return (
    <div >
      <div className="navbar">
        <div className="navbar-left">
          <RootLink />
        </div>
        <div className="navbar-right">
          <GreetingContainer />
        </div>
      </div>
      <div className="children">
        { children }
      </div>
    </div>
  );
};

export default App;
