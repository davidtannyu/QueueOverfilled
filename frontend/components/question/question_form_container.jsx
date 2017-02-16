import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion, updateQuestion } from '../../actions/question_actions';
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.route.formType;
  let question = { title: "", body: ""};
  if (formType === "edit") {
    question = state.questions[ownProps.params.id];
  }
  return {
    question,
    currentUser: state.currentUser,
    errors: state.forms.question.errors,
    formType
  };
};

const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  clearErrors: (formType) => dispatch(receiveErrors([], "question"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
