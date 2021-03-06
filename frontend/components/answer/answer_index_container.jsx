import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { deleteAnswer } from '../../actions/answer_actions';
import { decrementAnswerCount } from '../../actions/question_actions';

const mapStateToProps = state => {
  return {
  answers: state.answers,
  currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  deleteAnswer: (id) => dispatch(deleteAnswer(id)),
  decrementAnswerCount: (questionId) => dispatch(decrementAnswerCount(questionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);
