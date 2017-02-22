import React from 'react';
import { connect } from 'react-redux';
import { createVote, updateVote } from "../../actions/vote_actions";
import Vote from './vote';

const mapStateToProps = (state, ownProps) => {
  const {voteCount} = ownProps;
  let currentVote = {};
  Object.values(state.votes).forEach((vote) => {
    if (vote.voter_id === state.currentUser.id &&
      vote.answer_id === ownProps.answer_id) {
        currentVote = vote;
        return false;
    }
  });
  return {
    currentVote,
    voteCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createVote: (vote) => dispatch(createVote(vote)),
    updateVote: (vote) => dispatch(updateVote(vote))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote);
