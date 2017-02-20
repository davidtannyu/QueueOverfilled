import React from 'react';
import { connect } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = (props) => {
  const { children, loading } = props;
  let loadingIcon = null;
  if (loading) {
    loadingIcon = (<div className="loader"></div>);
  }
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
        {loadingIcon}
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

const mapStateToProps = (state) => {
  return ({
    loading: state.loading
  });
};

export default connect(mapStateToProps)(App);
