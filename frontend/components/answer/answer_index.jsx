import React, { Component } from 'react';

export default class AnswerIndex extends Component {

  render() {
    let answers = Object.values(this.props.answers);
    return (
      <div>
        <ul className="answer-index-list">
          { answers.map (answer => (
            <AnswerIndexItem key={answer.id} answer={answer} />
          ))}
        </ul>
      </div>
    );
  }
}


const AnswerIndexItem = (props) => {
  let { answer } = props;
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
