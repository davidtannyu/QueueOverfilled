import { connect } from 'react-redux';
import AnswerIndex from './answer_index';

const mapStateToProps = state => {
  return {
  answers: state.answers
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);
