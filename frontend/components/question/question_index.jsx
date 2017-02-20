import React, { Component } from 'react';
import {Link} from 'react-router';
import QuestionIndexItem from './question_index_item';

export default class QuestionIndex extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    let questions = Object.values(this.props.questions);
    return (
      <div className="main-bar">
        <div className="header">
          <p className="text">Top Questions</p>
          <Link to="/questions/ask">
            <p className="blue-button">
              Ask Question
            </p>
        </Link>
      </div>
        <ul className="question-index-list">
          { questions.map (question => (
            <QuestionIndexItem key={question.id} question={question} />
          ))}
        </ul>
      </div>
    );
  }
}
