import React, { Component } from 'react';
import Author from "./author";
import { Link, hashHistory } from 'react-router';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.id);
  }

  deleteQuestion(e) {
    e.preventDefault();
    this.props.deleteQuestion(this.props.params.id)
    .then(hashHistory.push("/"));
  }

  render() {
    const {currentUser, question, author} = this.props;
    let deleteButton = null;
    if (currentUser && author && currentUser.id === author.id) {
      deleteButton = (
        <div>
          <button onClick={this.deleteQuestion}> {"delete"} </button>
        </div>
      );
    }
    return (
      <div className="question-show">
        <div className="header">
          <Link to="/questions/ask">
            <p className="blue-button">
              Ask Question
            </p>
          </Link>
        </div>
        <QuestionDetail question={question} author={author}/>
        {deleteButton}
      </div>
    );
  }
}

const QuestionDetail = (props) => {
  const {question, author} = props;
  if (!question) {
    return null;
  }
  return (
    <div className="question-detail">
      <h4 className="question-title">{question.title}</h4>
      <p>{question.body}</p>
      <Author author={author}/>
    </div>
  );
};
