import React from 'react';
import { connect } from 'react-redux';
import { createVote, updateVote } from "../../actions/vote_actions";
import Vote from './vote';

const mapStateToProps = (state, ownProps) => {
  const {vote_count} = ownProps;
  let currentVote = {};
  Object.values(state.votes).each((vote) => {
    if (vote.voter_id === state.currentUser.id &&
      vote.answer_id === ownProps.answer_id) {
        currentVote = vote;
        return false;
    }
  });
  return {
    currentVote,
    vote_count
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
