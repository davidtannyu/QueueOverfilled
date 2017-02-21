import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleField, value } = this.props;

    return (
      <textarea className="text-editor"
        onChange={handleField("body")}
        value={value}>
      </textarea>
    );
  }
}
