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
              deleteAnswer={this.props.deleteAnswer} />
          ))}
        </ul>
      </div>
    );
  }
}


const AnswerIndexItem = (props) => {
  let { answer, deleteAnswer } = props;
  const editForm = (e) => {
      e.preventDefault();
      const questionId = this.props.question.id;
      hashHistory.push(`/questions/${questionId}/edit`);
  };
  if (currentUser && answer && currentUser.id === answer.author_id) {
    deleteButton = (
      <div>
        <button className="blue-button" onClick={deleteAnswer}>
          {"delete"}
        </button>
      </div>
    );
    editButton = (
      <div>
        <button className="blue-button" onClick={editForm}>
          edit
        </button>
      </div>
    );
  }
  if (!answer) {
    return (<div></div>);
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
      </div>
    </li>
  );
};
