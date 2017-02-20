import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import TextEditor from '../text_editor';

export default class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.answer;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleField = this.handleField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const question_id = this.props.questionId;
    const answer = Object.assign({}, this.state,
        { author_id: this.props.currentUser.id,
        question_id});
    let promise;
    if (this.props.formType === "new") {
      promise = this.props.createAnswer(answer);
    }
    else {
      promise = this.props.updateAnswer(answer);
    }
    promise.then( (action) => {
      this.setState({body: ""});
      this.props.clearErrors();
    });
  }

  handleField(field) {
    return (e) => {
      this.setState( {[field]: e.target.value});
    };
  }

  render() {
    const { errors, formType } = this.props;
    let buttonText =
    (formType === "new") ? "Post Your Answer" : "Edit Answer";
    let bodyErrors = errors.filter( (error) => {
      return error.split(" ")[0] === "Body";
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="answer-form">
          <p>
            Can you help? Queue Overfilled depends on everyone sharing their knowledge. If you're able to answer this question, please do!
          </p>
          <p className="space">
            Your Answer
          </p>
          <div className="input-field">
            <TextEditor handleField={this.handleField}
              value={this.state.body} />
            {bodyErrors.map((el, idx) => (
                <h4 className="error-text" key={idx}>{el}</h4>
            ))}
          </div>
          <button className="blue-button">{buttonText}</button>
          <p className="privacy-text">
            By posting your answer, you agree to the
            <a href=""> privacy policy</a> and <a href="">terms of service</a>.
          </p>
        </form>
      </div>
    );
  }
}
