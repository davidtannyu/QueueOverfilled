import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import {parseText} from '../util/text_util';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { preview: "", body: "" };
    this.handleField = this.handleField.bind(this);
    this.addStrongText = this.addStrongText.bind(this);
    this.addItalicText = this.addItalicText.bind(this);
  }

  handleField(e) {
    e.preventDefault();
    this.props.handleField("body")(e);
    this.setState(
      {
        preview: parseText(e.target.value),
        body: e.target.value
    });
  }

  addStrongText(e) {
    e.preventDefault();
    let value;
    if (!window.getSelection.toString()) {
      value = this.state.body.replace(window.getSelection.to_s,"<b>$1</b>");
    } else {
      value = `${this.state.body} **strong**`;
    }
    e.target = { value };
    this.handleField(e);
  }

  addItalicText(e) {
    e.preventDefault();
    let value = `${this.state.body} *italic*`;
    e.target = { value };
    this.handleField(e);
  }

  render() {
    const { handleField, value } = this.props;

    return (
      <div className="text-editor">
        <div className="button-row">
          <p onClick={this.addStrongText} value="**strong**">B</p>
          <p onClick={this.addItalicText}>I</p>
        </div>
        <textarea className="text-editor"
          onChange={this.handleField}
          value={value}>
        </textarea>
        <div className="preview">
          <p className="text" dangerouslySetInnerHTML={{__html: this.state.preview}}>
          </p>
        </div>
      </div>
    );
  }
}
