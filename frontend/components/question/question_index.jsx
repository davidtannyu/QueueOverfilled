import React, { Component } from 'react';
import {Link} from 'react-router';
import QuestionIndexItem from './question_index_item';

export default class QuestionIndex extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
    if (!this.props.loaded) {
      this.props.fetchQuestions();
    }
  }

  render() {
    let questions = Object.values(this.props.questions);
    questions = questions.sort( (a,b) => {
      if (a.updated_at < b.updated_at) {
        return 1;
      } else if (a.updated_at > b.updated_at) {
        return -1;
      } else {
        return 0;
      }
    });
    return (
      <div className="content">
        <div className="main-bar">
          <p className="header-text">Top Questions</p>
            <ul className="question-index-list">
              { questions.map (question => (
                <QuestionIndexItem key={question.id} question={question}
                  loaded={this.props.loaded} />
              ))}
            </ul>
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
