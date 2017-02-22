import React, {Component} from 'react';

export default class Vote extends Component {
  constructor(props) {
    super(props);
    const {voteCount, vote} = props;
    this.state = { voteCount, vote };
  }

  render() {
    const { vote } = this.state;
    let upvote = "";
    let downvote = "";
    if (vote) {
      if (vote.value === 1) {
        upvote = "selected";
      } else if (vote.value === -1) {
        downvote = "selected";
      }
    }
    return (
      <div className="vote-component">
        <div className="upvote">
          <p className={upvote}>
            ^
          </p>
        </div>
        <div className="vote-count">
          { this.state.voteCount }
        </div>
        <div className="downvote">
          <p className={downvote}>
            V
          </p>
        </div>
      </div>
    );
  }
}
