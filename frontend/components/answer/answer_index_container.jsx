import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { deleteAnswer } from '../../actions/answer_actions';

const mapStateToProps = state => {
  return {
  answers: state.answers
  };
};

const mapDispatchToProps = dispatch => ({
  deleteAnswer: (id) => dispatch(deleteAnswer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);
