import React, { Component } from 'react';
import Author from "./author";
import { Link, hashHistory } from 'react-router';
import AnswerIndexContainer from '../answer/answer_index_container';
import AnswerFormContainer from '../answer/answer_form_container';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.id);
  }

  deleteQuestion(e) {
    e.preventDefault();
    this.props.deleteQuestion(this.props.params.id)
    .then(hashHistory.push("/"));
  }

  editForm(e) {
    e.preventDefault();
    const questionId = this.props.question.id;
    hashHistory.push(`/questions/${questionId}/edit`);
  }

  render() {
    const {currentUser, question, author} = this.props;
    let deleteButton = null;
    let editButton = null;
    let answerForm = null;
    if (currentUser && author && currentUser.id === author.id) {
      deleteButton = (
        <div>
          <button className="text-button" onClick={this.deleteQuestion}>
            {"delete"}
          </button>
        </div>
      );
      editButton = (
        <div>
          <button className="text-button" onClick={this.editForm}>
            edit
          </button>
        </div>
      );
    }
    if (question && currentUser) {
      answerForm = (
        <div>
          <AnswerFormContainer formType="new" questionId={question.id} />
        </div>
      );
    }
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
        {editButton}
        {deleteButton}
        <AnswerIndexContainer />
        {answerForm}
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
