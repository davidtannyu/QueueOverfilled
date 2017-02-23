import React, {Component} from 'react';

export default class Vote extends Component {
  constructor(props) {
    super(props);
    const {voteCount, currentVote} = props;
    this.state = { voteCount, currentVote };
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote(e) {
    e.preventDefault();
    if (this.props.currentUser){
      let { currentVote } = this.props;
      let { voteCount } = this.state;
      if ( currentVote.id ) {
        if (currentVote.value === 1) {
          voteCount -= 1;
          currentVote.value = 0;
        } else {
          voteCount += 1;
          if (currentVote.value === -1) {
            voteCount += 1;
          }
          currentVote.value = 1;
        }
        this.setState({currentVote, voteCount});
        this.props.updateVote(currentVote);
      } else {
        voteCount += 1;
        currentVote.value = 1;
        this.setState({currentVote, voteCount});
        this.props.createVote({
          value: 1,
          voter_id: this.props.currentUser.id,
          answer_id: this.props.answerId
        }).then(action => this.setState({
          currentVote: Object.values(action.vote)[0]
        }));
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.currentVote != newProps.currentVote) {
      const {currentVote} = newProps;
      this.setState({currentVote});
    }
  }

  downVote(e) {
    e.preventDefault();
    if (this.props.currentUser){
      let { currentVote } = this.props;
      let { voteCount } = this.state;
      if ( currentVote.id ) {
        if (currentVote.value === -1) {
          voteCount += 1;
          currentVote.value = 0;
        } else {
          voteCount -= 1;
          if (currentVote.value === 1) {
            voteCount -= 1;
          }
          currentVote.value = -1;
        }
        this.setState({currentVote, voteCount});
        this.props.updateVote(currentVote);
      } else {
        voteCount -= 1;
        currentVote.value = -1;
        this.setState({currentVote, voteCount});
        this.props.createVote({
          value: -1,
          voter_id: this.props.currentUser.id,
          answer_id: this.props.answerId
        }).then(action => {
          this.setState({currentVote: Object.values(action.vote)[0]});
        });
      }
    }
  }

  render() {
    const { currentVote } = this.state;
    let upvote = "";
    let downvote = "";
    if (currentVote.id) {
      if (currentVote.value === 1) {
        upvote = "selected";
      } else if (currentVote.value === -1) {
        downvote = "selected";
      }
    }
    return (
      <div className="vote-component">
        <div className="upvote">
          <p className={upvote}>
            <i onClick={this.upVote} className="upvote-arrow"></i>
          </p>
        </div>
        <div className="vote-count">
          { this.state.voteCount }
        </div>
        <div className="downvote">
          <p className={downvote}>
            <i onClick={this.downVote} className="downvote-arrow"></i>
          </p>
        </div>
      </div>
    );
  }
}
