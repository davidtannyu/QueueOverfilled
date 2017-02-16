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
        <Link to="/questions/ask"> Ask Question </Link>
        <ul className="question-index-list">
          { questions.map (question => (
            <QuestionIndexItem key={question.id} question={question} />
          ))}
        </ul>
      </div>
    );
  }
}
