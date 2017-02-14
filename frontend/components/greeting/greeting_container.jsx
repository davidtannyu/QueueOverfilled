import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
  currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
