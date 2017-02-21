import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer, updateAnswer } from '../../actions/answer_actions';
import { receiveErrors } from '../../actions/error_actions';
import { incrementAnswerCount } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  const {formType, questionId} = ownProps;
  let answer = { body: "" };
  if (formType === "edit") {
    answer = state.answers[ownProps.answerId];
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
  clearErrors: (formType) => dispatch(receiveErrors([], "answer")),
  incrementAnswerCount: (questionId) => dispatch(incrementAnswerCount(questionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
