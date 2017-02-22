import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from "../../actions/question_actions";
import Search from './search';

const mapStateToProps = (state) => {
  const {questions} = state;
  return {
    questions
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
