import React, { Component } from 'react';
import { hashHistory } from 'react-router';

export default class AnswerIndex extends Component {

  render() {
    let answers = Object.values(this.props.answers);
    return (
      <div>
        <ul className="answer-index-list">
          { answers.map (answer => (
            <AnswerIndexItem key={answer.id} answer={answer}
              deleteAnswer={this.props.deleteAnswer}
              currentUser={this.props.currentUser} />
          ))}
        </ul>
      </div>
    );
  }
}


const AnswerIndexItem = (props) => {
  let { answer, currentUser } = props;
  let deleteButton = null;
  const deleteAnswer = (e) => {
    e.preventDefault();
    props.deleteAnswer(answer.id);
  };
  if (currentUser && currentUser.id === answer.author.id) {
    deleteButton = (
      <div>
        <button className="blue-button" onClick={deleteAnswer}>
          {"delete"}
        </button>
      </div>
    );
  }
  return (
    <li >
      <div className="answer-index-item">
        <div className="answer-body">
          {answer.body}
        </div>
        <div className="answer-author">
          {answer.author.display_name}
        </div>
        {deleteButton}
      </div>
    </li>
  );
};
