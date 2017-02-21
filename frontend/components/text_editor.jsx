import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.handleField = this.handleField.bind(this);
  }

  handleField(e) {
    e.preventDefault();
    this.props.handleField("body")(e);
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

        </div>
      </div>
    );
  }
}
