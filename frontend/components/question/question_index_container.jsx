import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  const questions = (ownProps.questions) || state.questions;
  const { loaded } = ownProps;
  return {
    questions,
    loaded
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
