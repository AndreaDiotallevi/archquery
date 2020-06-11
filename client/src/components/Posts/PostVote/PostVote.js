import React from "react";
import { connect } from "react-redux";
import { votePost } from "../../../actions";

const PostVote = (props) => {
  const { post } = props;

  return (
    <div className="component-post-vote" data-test="component-post-vote">
      <button onClick={() => props.votePost(post, props.userId)}>
        <svg>
          <path d="M2 26h32L18 10 2 26z"></path>
        </svg>
      </button>
      <p>{post.score}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { votePost })(PostVote);
