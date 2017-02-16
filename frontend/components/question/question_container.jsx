import { connect } from 'react-redux';
import Question from './question';
import { fetchQuestion } from "../../actions/question_actions";

const mapStateToProps = (state, ownProps) => {
  const question = state.questions[ownProps.params.id];
  const author = (question) ? question.author : null;
  return {
  question,
  author
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (id) => dispatch(fetchQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
