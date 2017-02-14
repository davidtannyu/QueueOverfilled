import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="navbar">
        <h1>
          QueueOverfilled
        </h1>
        <GreetingContainer />
      </div>
      { children }
    </div>
  );
};

export default App;
