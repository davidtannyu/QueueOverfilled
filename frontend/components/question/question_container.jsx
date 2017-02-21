import { connect } from 'react-redux';
import Question from './question';
import { fetchQuestion, deleteQuestion } from "../../actions/question_actions";

const mapStateToProps = (state, ownProps) => {
  const question = state.questions[ownProps.params.id];
  const author = (question) ? question.author : null;
  const currentUser = state.currentUser;
  let answers_count;
  if (question) {
    answers_count = question.answers_count;
  }
  return {
  question,
  author,
  currentUser,
  answers_count
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (id) => dispatch(fetchQuestion(id)),
  deleteQuestion: (id) => dispatch(deleteQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
