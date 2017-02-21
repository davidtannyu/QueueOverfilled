import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';

export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleField = this.handleField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state,
        { author_id: this.props.currentUser.id});
    let promise;
    if (this.props.formType === "new") {
      promise = this.props.createQuestion(question);
    }
    else {
      promise = this.props.updateQuestion(question);
    }
    promise.then( (action) => {
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
    const { errors, formType } = this.props;
    let buttonText =
    (formType === "new") ? "Post Your Question" : "Edit Question";
    let titleErrors = errors.filter( (error) => {
      return error.split(" ")[0] === "Title";
    });
    let bodyErrors = errors.filter( (error) => {
      return error.split(" ")[0] === "Body";
    });
    return (
      <div className="question-form-page">
        <div className="question-form main-bar">
          <form onSubmit={this.handleSubmit} className="ask-question-form">
            <div className="input-field">
              <label className="title-label"
                htmlFor="title"><strong>Title</strong></label>
              <input id="title" type="text" className="title"
                onChange={this.handleField("title")}
                placeholder="What's your question? Go into detail."
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
            <div className="input-field">
              <input
                type="checkbox" />
              <span className="checkbox"><strong>
                Send me new responses to my posts via email
              </strong>
              </span>
            </div>
            <button className="blue-button">{buttonText}</button>
          </form>
        </div>
        <div className="side-bar">
           <div className="how-to-ask">
             <h4>How to Ask</h4>
             <p><strong>Is your question about anything?</strong></p>
             <p>
               We prefer questions that can be talked about in a large group of
               people.
             </p>
             <p>Feel free to ask any question, even impossible ones.</p>
             <p>Provide details. Share your philosophy.</p>
             <p>
               Take a look at other&nbsp;
               <Link to="/">questions that have been asked</Link>
             </p>
           </div>
        </div>
      </div>
    );
  }
}
