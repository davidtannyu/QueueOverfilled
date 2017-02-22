import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionIndexContainer from '../question/question_index_container';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearch(e) {
    e.preventDefault();
    this.setState( { title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    this.props.fetchQuestions({ title })
    .then(() => hashHistory.push(`/search?title=${this.state.title}`));
  }

  render() {
    const { questions } = this.props;
    return (
      <div className="search-content">
        <div className="main-bar">
          <div className="search-bar">
            <form onSubmit={this.handleSubmit} className="search-form">
              <input className="search-input"
                onChange={this.updateSearch}
                value={this.state.title}/>
              <button className="blue-button">Search</button>
            </form>
          </div>
          <div className="searched-question-index-list">
            <QuestionIndexContainer questions={questions}/>
          </div>
        </div>
        <div className="side-bar">
          <Link to="/questions/ask">
            <p className="blue-button">
              Ask Question
            </p>
          </Link>
        </div>
      </div>
    );
  }
}
