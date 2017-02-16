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
    .then( () => {
      this.setState({title: "", body: ""});
      this.props.clearErrors();
      hashHistory.push("/");
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
    return (
      <div>
        {errors.map((el, idx) => (
            <h4 className="error-text" key={idx}>{el}</h4>
          ))}
        <form onSubmit={this.handleSubmit} className="ask-question-form">
          <div className="input-field">
            <label htmlFor="title"><strong>Title</strong></label>
            <input id="title" type="text"
              onChange={this.handleField("title")}
              value={this.state.title} />
          </div>
          <div className="input-field">
            <TextEditor handleField={this.handleField}
              value={this.state.body} />
          </div>
          <button>{buttonText}</button>
        </form>
      </div>
    );
  }
}
