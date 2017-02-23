import * as VoteApiUtil from '../util/vote_api_util';
import { receiveErrors } from './error_actions';
import { loading } from './loading';

export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const RECEIVE_VOTES = "RECEIVE_VOTES";

export const createVote = (vote) => dispatch => {
  dispatch(loading());
  return VoteApiUtil.createVote(vote)
  .then(vote => dispatch( receiveVote({[vote.id]: vote})),
  errors => dispatch(receiveErrors(errors.responseJSON, "votes")));
};

export const updateVote = (vote) => dispatch => {
  dispatch(loading());
  return VoteApiUtil.updateVote(vote)
  .then(vote => dispatch( receiveVote({[vote.id]: vote})),
  errors => dispatch(receiveErrors(errors.responseJSON, "votes")));
};

export const receiveVote = (vote) => {
  return ({
    type: RECEIVE_VOTE,
    vote
  });
};

export const receiveVotes = (votes) => {
  return ({
    type: RECEIVE_VOTES,
    votes
  });
};
