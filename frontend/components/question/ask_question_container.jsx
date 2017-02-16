import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.forms.question.errors
  };
};

const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  clearErrors: (formType) => dispatch(receiveErrors([], "question"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
