import React from 'react';
import { connect } from 'react-redux';
import { createVote, updateVote } from "../../actions/vote_actions";
import { fetchAnswer, receiveAnswer } from "../../actions/answer_actions";
import { getCurrentVote } from "../../reducers/selector.js";
import Vote from './vote';

const mapStateToProps = (state, ownProps) => {
  const { currentUser } = state;
  const { answer } = ownProps;
  const voteCount = answer.vote_count;
  const answerId = answer.id;
  let currentVote = getCurrentVote(state, answerId);
  return {
    currentVote,
    voteCount,
    answerId,
    currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createVote: (vote) => dispatch(createVote(vote)),
    updateVote: (vote) => dispatch(updateVote(vote)),
    fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId)),
    receiveAnswer: (answer) => dispatch(receiveAnswer(answer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote);
