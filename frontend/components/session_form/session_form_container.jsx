import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let loggedIn = state.currentUser !== null;
  let formType = ownProps.route.formType;
  return ({
  errors: state.forms[formType].errors,
  formType,
  loggedIn
  });
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  let processForm =
    ownProps.location.pathname === "/signup" ? signup : login;
  return ({
    processForm: (user) => dispatch(processForm(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
