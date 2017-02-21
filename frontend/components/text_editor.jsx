import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { preview: "" };
    this.handleField = this.handleField.bind(this);
    this.parseText = this.parseText.bind(this);
  }

  handleField(e) {
    e.preventDefault();
    this.props.handleField("body")(e);
    this.setState( {preview: this.parseText(e.target.value)});
  }

  parseText(text) {
    let parsedText = text;
    parsedText = parsedText.replace(/\*\*(.+)\*\*/,"<b>$1</b>");
    parsedText = parsedText.replace(/\*(.+)\*/,"<i>$1</i>");
    return parsedText;
  }

  render() {
    const { handleField, value } = this.props;

    return (
      <div className="text-editor">
        <div className="button-row">
          <p onClick={console.log}>B</p>
          <p onClick={console.log}>I</p>
        </div>
        <textarea className="text-editor"
          onChange={this.handleField}
          value={value}>
        </textarea>
        <div className="preview">
          <p className="text">
            {this.state.preview}
          </p>
        </div>
      </div>
    );
  }
}
