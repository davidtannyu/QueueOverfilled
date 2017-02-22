import React, {Component} from 'react';
import { connect } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import { Link, hashHistory } from 'react-router';
import { fetchQuestions } from '../actions/question_actions';

const App = (props) => {
  const { children, loading } = props;
  let loadingIcon = null;
  if (loading) {
    loadingIcon = (<div className="loader"></div>);
  }
  return (
    <div className="page">
      <div className="navbar">
        <div className="navbar-left">
          <h1 className="logo">
            <Link to="/">
              Queue <strong>Overfilled</strong>
            </Link>
          </h1>
        </div>
        <div className="navbar-center">
          <SearchBar fetchQuestions={props.fetchQuestions} />
        </div>
        <div className="navbar-right">
          <GreetingContainer />
        </div>
      </div>
      <div className="children">
        {loadingIcon}
        { children }
      </div>
      <div className="footer">
        <a href="#">about us</a>
        <a href="#">tour</a>
        <a href="#">help</a>
        <a href="#">blog</a>
        <a href="#">chat</a>
        <a href="#">data</a>
        <a href="#">legal</a>
        <a href="#">privacy policy</a>
        <a href="#">work here</a>
        <a href="#">advertising info</a>
        <a href="#">developers jobs directory</a>
        <a href="#">mobile</a>
        <a href="#"><strong>contact us</strong></a>
        <a href="#"><strong>feedback</strong></a>
      </div>
    </div>
  );
};



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.searchRoute = this.searchRoute.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  searchRoute(e) {
    e.preventDefault();
    const {title} = this.state;
    this.props.fetchQuestions({title})
    .then(() => hashHistory.push(`/search?title=${this.state.title}`));
  }

  updateData(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.searchRoute}>
        <input placeholder="Search..."
          onChange={this.updateData}
          />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    loading: state.loading
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestions: (data) => dispatch(fetchQuestions(data))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
