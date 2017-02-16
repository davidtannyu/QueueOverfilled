import React, { Component } from 'react';
import Author from "./author";
import { Link } from 'react-router';

export default class Question extends Component {

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.id);
  }

  render() {
    const {question, author} = this.props;
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
