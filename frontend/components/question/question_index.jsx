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
      <div class="main-bar">
        <ul className="question-index-list">
          { questions.map (question => (
            <QuestionIndexItem key={question.id} question={question} />
          ))}
        </ul>
      </div>
    );
  }
}
