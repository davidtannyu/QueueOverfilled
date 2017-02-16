import React, { Component } from 'react';


export default class Question extends Component {

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.id);
  }

  render() {
    const {question, author} = this.props;
    return (
      <div>
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
    <div>
      <h4 className="question-title">{question.title}</h4>
      <p>{question.body}</p>
      <p>{author.display_name}</p>
    </div>
  );
};
