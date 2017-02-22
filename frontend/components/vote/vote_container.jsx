import React from 'react';
import { connect } from 'react-redux';
import { fetchVote } from "../../actions/vote_actions";
import Vote from './vote';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote);
