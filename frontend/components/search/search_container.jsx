import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from "../../actions/question_actions";
import Search from './search';

const mapStateToProps = (state, ownProps) => {
  const { title } = ownProps.location.search.slice(7) || "";
  const {questions} = state;
  return {
    questions,
    title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: (search) => dispatch(fetchQuestions(search))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
