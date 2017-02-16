import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import TextEditor from '../text_editor';

export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleField = this.handleField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state,
        { author_id: this.props.currentUser.id});
    this.props.createQuestion(question)
    .then( (action) => {
      this.setState({title: "", body: ""});
      this.props.clearErrors();
      const questionId = Object.keys(action.question)[0];
      hashHistory.push(`/questions/${questionId}`);
    });
  }

  handleField(field) {
    return (e) => {
      this.setState( {[field]: e.target.value});
    };
  }

  render() {
    let buttonText = "Ask Question";
    const { errors } = this.props;
    let titleErrors = errors.filter( (error) => {
      return error.split(" ")[0] === "Title";
    });
    let bodyErrors = errors.filter( (error) => {
      return error.split(" ")[0] === "Body";
    });
    return (
      <div className="question-form">
        <form onSubmit={this.handleSubmit} className="ask-question-form">
          <div className="input-field">
            <label htmlFor="title"><strong>Title</strong></label>
            <input id="title" type="text" className="title"
              onChange={this.handleField("title")}
              value={this.state.title} />
            {titleErrors.map((el, idx) => (
                <h4 className="error-text" key={idx}>{el}</h4>
            ))}
          </div>
          <div className="input-field">
            <TextEditor handleField={this.handleField}
              value={this.state.body} />
            {bodyErrors.map((el, idx) => (
                <h4 className="error-text" key={idx}>{el}</h4>
            ))}
          </div>
          <button className="blue-button">{buttonText}</button>
        </form>
      </div>
    );
  }
}
