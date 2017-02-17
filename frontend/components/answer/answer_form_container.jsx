import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer, updateAnswer } from '../../actions/answer_actions';
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  const {formType, questionId} = ownProps;
  let answer = { body: "" };
  if (formType === "edit") {
    answer = state.answers[ownProps.params.id];
  }
  return {
    answer,
    currentUser: state.currentUser,
    errors: state.forms.answer.errors,
    formType,
    questionId
  };
};

const mapDispatchToProps = dispatch => ({
  createAnswer: (answer) => dispatch(createAnswer(answer)),
  updateAnswer: (answer) => dispatch(updateAnswer(answer)),
  clearErrors: (formType) => dispatch(receiveErrors([], "answer"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
