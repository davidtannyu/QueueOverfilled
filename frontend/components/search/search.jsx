import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionIndexContainer from '../question/question_index_container';


export default class Search extends Component {
  constructor(props) {
    super(props);
    const title = props.location.search.slice(7);
    this.state = { title };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const title = this.props.location.search.slice(7);
    this.props.fetchQuestions({ title });
  }

  updateSearch(e) {
    e.preventDefault();
    this.setState( { title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    if (title) {
      this.props.fetchQuestions({ title })
      .then(() => hashHistory.push(`/search?title=${this.state.title}`));
    }
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
            <QuestionIndexContainer questions={questions} loaded={true}/>
          </div>
        </div>
      </div>
    );
  }
}
