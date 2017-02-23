import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionIndexContainer from '../question/question_index_container';


export default class Search extends Component {
  constructor(props) {
    super(props);
    const title = decodeURIComponent(props.location.search.slice(7));
    this.state = { title };
    this.onChangeUpdate = false;
    this.updateSearch = this.updateSearch.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const title = decodeURIComponent(this.props.location.search.slice(7));
    this.props.fetchQuestions({ title });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.search !== newProps.location.search) {
      const title = decodeURIComponent(newProps.location.search.slice(7));
      this.props.fetchQuestions({ title });
      this.setState({title});
    }
  }

  updateCheckbox(e) {
    this.onChangeUpdate = !this.onChangeUpdate;
  }

  updateSearch(e) {
    e.preventDefault();
    this.setState( { title: e.target.value });
    if (this.onChangeUpdate) {
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    if (title) {
      this.props.fetchQuestions({ title })
      .then(() => hashHistory.push(`/search?title=${encodeURIComponent(this.state.title)}`));
    }
  }

  render() {
    const { questions } = this.props;
    let selected="";
    if (this.onChangeUpdate) {
      selected="selected";
    }
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
            <input type="checkbox" onChange={this.updateCheckbox}
              selected={selected} />Search as I type
          </div>
          <div className="searched-question-index-list">
            <QuestionIndexContainer questions={questions} loaded={true}/>
          </div>
        </div>
      </div>
    );
  }
}
