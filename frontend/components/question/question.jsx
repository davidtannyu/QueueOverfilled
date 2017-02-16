import React, { Component } from 'react';


export default class Question extends Component {
  render() {
    const {question} = this.props;
    return (
      <div>
        <QuestionDetail question={question}/>
      </div>
    );
  }
}

const QuestionDetail = (props) => {
  const {question} = props;
  return (
    <div>
      <h4>{question.title}</h4>
      <p>{question.body}</p>
    </div>
  );
};
