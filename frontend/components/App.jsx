import React, {Component} from 'react';
import { connect } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import { Link, hashHistory } from 'react-router';
import { fetchQuestions } from '../actions/question_actions';

const App = (props) => {
  const { children, loading, clear, title, isGuest, location } = props;
  let loadingIcon = null;
  let guestGreeting = null;
  if (loading) {
    loadingIcon = (<div className="loader"></div>);
  }
  let questionClass = "";
  if (location.pathname.includes("questions")) {
    questionClass = "question-route";
  }
  if (isGuest) {
    guestGreeting = (
      <div className="guest-greeting">
      <p>
      Greetings Guest! Welcome to QueueOverfilled! <br />
      This project is made to emulate StackOverflow. <br />
      Feel free to ask questions and answer them and even vote as a guest! <br />
      If you would like to look at the code, the repo can be found&nbsp;
      <a href="https://github.com/davidtannyu/QueueOverfilled">here</a>. <br />
      If you would like to know more about me, my portfolio can be found&nbsp;
      <a href="http://davidtan.pro/">here</a> and my LinkedIn can be found&nbsp;
      <a href="https://www.linkedin.com/in/davidtandata/">here</a>.
      </p>
      </div>
    );
  }
  return (
    <div className="page">
      <div className="navbar">
        <div className="navbar-left">
          <div className="root-link logo">
            <img className="logo-image" src={window.logo} width="50" height="50"/>
            <p>
              <Link to="/">
                Queue <strong>Overfilled</strong>
              </Link>
            </p>
          </div>
          <div className="links">
            <a  className={questionClass} href="">Questions</a>
            <a href="">Jobs</a>
            <a href="">Documentation</a>
            <a href="">Tags</a>
            <a href="">Users</a>
          </div>
        </div>
        <div className="navbar-center">
          <SearchBar fetchQuestions={props.fetchQuestions} clear={clear}
            title={title} />
        </div>
        <div className="navbar-right">
          <GreetingContainer />
        </div>
      </div>
      <div className="children">
        {guestGreeting}
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
    const {title} = props;
    this.state = { title };
    this.searchRoute = this.searchRoute.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  searchRoute(e) {
    e.preventDefault();
    const {title} = this.state;
    this.props.fetchQuestions({title})
    .then(() => hashHistory.push(`/search?title=${encodeURIComponent(this.state.title)}`));
  }

  updateData(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  componentWillReceiveProps(newProps) {
    if (this.props.clear !== newProps.clear && newProps.clear) {
      this.setState({title: ""});
    }
    if (this.props.title !== newProps.title) {
      this.setState({title: newProps.title});
    }
  }

  render() {
    return (
      <form onSubmit={this.searchRoute}>
        <div>
          <input className="navbar-search"
            placeholder="&#xf002; Search..."
            onChange={this.updateData}
            value={this.state.title}/>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const clear = (ownProps.location.pathname !== "/search");
  let title = "";
  if (ownProps.location.search) {
    title = decodeURIComponent(ownProps.location.search.slice(7));
  }
  let isGuest = false;
  if ( state.currentUser ) {
    isGuest = state.currentUser.email === "guest@email.queueoverfilled.com";
  }
  return ({
    loading: state.loading,
    clear,
    title,
    isGuest
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
