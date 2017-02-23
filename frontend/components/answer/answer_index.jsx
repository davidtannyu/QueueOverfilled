import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import AnswerFormContainer from './answer_form_container';
import {parseText} from '../../util/text_util';
import VoteContainer from '../vote/vote_container';

export default class AnswerIndex extends Component {

  render() {
    let answers = Object.values(this.props.answers);
    answers = answers.sort( (a,b) => {
      if (a.vote_count < b.vote_count) {
        return 1;
      } else if (a.vote_count > b.vote_count) {
        return -1;
      } else {
        return 0;
      }
    });
    return (
      <div>
        <ul className="answer-index-list">
          { answers.map (answer => (
            <AnswerIndexItem key={answer.id} answer={answer}
              deleteAnswer={this.props.deleteAnswer}
              decrementAnswerCount={this.props.decrementAnswerCount}
              currentUser={this.props.currentUser} />
          ))}
        </ul>
      </div>
    );
  }
}


class AnswerIndexItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.editAnswer = this.editAnswer.bind(this);
  }

  deleteAnswer(e) {
    e.preventDefault();
    this.props.deleteAnswer(this.props.answer.id);
    this.props.decrementAnswerCount(this.props.answer.question_id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.answer !== newProps.answer) {
      this.props.answer.body = newProps.answer.body;
      this.setState ({
        editing: false
      });
    }
  }

  editAnswer(e) {
    e.preventDefault();
    this.setState ({
      editing: true
    });
  }

  render () {
    let { answer, currentUser } = this.props;
    let deleteButton = null;
    let editButton = null;
    let answer_body = null;
    if (currentUser && currentUser.id === answer.author.id) {
      deleteButton = (
        <div>
          <button className="text-button" onClick={this.deleteAnswer}>
            {"delete"}
          </button>
        </div>
      );
      editButton = (
        <div>
          <button className="text-button" onClick={this.editAnswer}>
            edit
          </button>
        </div>
      );
    }
    if (this.state.editing) {
      answer_body = (
        <div className="answer-body">
          <AnswerFormContainer formType="edit" answerId={answer.id}/>
        </div>
      );
    } else {
      answer_body = (
        <div className="answer-body">
          <p dangerouslySetInnerHTML={{__html: parseText(answer.body)}}>
          </p>
        </div>
      );
    }
    return (
      <li >
        <div className="answer-index-item">
          <VoteContainer voteCount={answer.vote_count}
            answerId={answer.id}/>
          <div className="answer-content">
            {answer_body}
            <div className="inline-buttons">
              {editButton}
              {deleteButton}
            </div>
            <div className="answer-author">
              <Link to={`/users/${answer.author.id}`}>
                {answer.author.display_name}
              </Link>
            </div>
          </div>

        </div>
      </li>
    );
  }
}
