import { connect } from 'react-redux';
import Question from './question';

const mapStateToProps = (state, ownProps) => {
  return {
  question: state.questions[ownProps.params.id]
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
