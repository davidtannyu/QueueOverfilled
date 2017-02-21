import React, { Component } from 'react';
import Author from "./author";
import { Link, hashHistory } from 'react-router';
import AnswerIndexContainer from '../answer/answer_index_container';
import AnswerFormContainer from '../answer/answer_form_container';
import {parseText} from '../../util/text_util';
import TextEditor from '../text_editor';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { answers_count: this.props.answers_count };
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.id)
    .then( (question) => {
      const {answers_count} = question;
      this.setState({answers_count});
    });
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

  componentWillReceiveProps(newProps) {
    const { question } = this.props;
    if (question) {
      const updatedAnswersCount = newProps.answers_count;
      if (question.answers_count === updatedAnswersCount) {
        this.setState({answers_count: updatedAnswersCount});
      }
    }
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
    let answerCount = null;
    if (question) {
      answerCount = (
      <p className="answer-count">
        {this.state.answers_count} Answers
      </p>);
      if (currentUser) {
        answerForm = (
          <div>
            <AnswerFormContainer formType="new" questionId={question.id} />
          </div>
        );
      }
    }
    return (
      <div className="question-show">
        <div className="main-bar">
          <QuestionDetail question={question} author={author}/>
          <div className="text-buttons">
            {editButton}
            {deleteButton}
          </div>
          {answerCount}
          <AnswerIndexContainer />
          {answerForm}
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

const QuestionDetail = (props) => {
  const {question, author} = props;
  if (!question) {
    return null;
  }
  return (
    <div className="question-detail">
      <h4 className="question-title">{question.title}</h4>
        <p className="text" dangerouslySetInnerHTML={{__html: parseText(question.body)}}>
        </p>
      <Author author={author}/>
    </div>
  );
};
