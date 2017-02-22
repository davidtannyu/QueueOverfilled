import React, {Component} from 'react';

export default class Vote extends Component {
  constructor(props) {
    super(props);
    const {vote_count, vote} = props;
    this.state = { vote_count, vote };
  }

  render() {
    const { vote } = this.state;
    let upvote = "";
    let downvote = "";
    if (vote.value === 1) {
      upvote = "selected";
    } else if (vote.value === -1) {
      downvote = "selected";
    }
    return (
      <div className="vote-component">
        <div className="upvote">
          <p className={upvote}>
            ^
          </p>
        </div>
        <div className="vote_count">
          { this.state.vote_count }
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
