import React from "react";
import { connect } from "react-redux";
import { votePost, fetchVote } from "../../../actions";
import ThumbsUp from "../../../assets/thumbs-up.png";

class PostVote extends React.Component {
  componentDidMount = () => {
    if (this.props.userId) {
      this.props.fetchVote(this.props.post.id, this.props.userId);
    }
  };

  handleClick = () => {
    const { post, userId } = this.props;
    if (userId) {
      this.props.votePost(post, userId);
    }
  };

  render() {
    const { post } = this.props;
    const isVoted = this.props.votes.filter(
      (vote) =>
        vote.user_id === this.props.userId &&
        vote.post_id === this.props.post.id
    )[0];

    return (
      <div className="component-post-vote" data-test="component-post-vote">
        <button onClick={this.handleClick}>
          <img
            src={ThumbsUp}
            alt="thumbs-up"
            className={`thumbs-up ${isVoted ? "voted" : ""}`}
          ></img>
        </button>
        <p>{post.score}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.auth.userId,
    votes: state.votes,
  };
};

export default connect(mapStateToProps, { votePost, fetchVote })(PostVote);
