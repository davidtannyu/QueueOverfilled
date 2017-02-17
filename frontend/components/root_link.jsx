import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import { resetErrors } from '../actions/error_actions';

const mapDispatchToProps = dispatch => ({
  resetErrors: () => dispatch(resetErrors())
});

const RootLink = (props) => {
  return (
    <h1 className="logo">
      <Link to="/" onClick={props.resetErrors}>
        Queue <strong>Overfilled</strong>
      </Link>
    </h1>
  );
};

export default connect(null, mapDispatchToProps)(RootLink);
