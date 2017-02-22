import React, { Component } from 'react';
import {Link} from 'react-router';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div className="search-content">
        <div className="main-bar">
          <div className="search-bar">
            <form className="search-form">
              <input className="search-input" />
              <button className="blue-button" value="Search"></button>
            </form>
          </div>
          <div className="searched-question-index-list">

          </div>
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
