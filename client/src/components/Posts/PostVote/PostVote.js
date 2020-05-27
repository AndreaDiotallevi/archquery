import React from "react";
import { connect } from "react-redux";
import { upvotePost, downvotePost } from "../../../actions";

const PostVote = (props) => {
  const { post } = props;

  return (
    <div className="component-post-vote" data-test="component-post-vote">
      <button onClick={() => props.upvotePost(post)}>
        <svg>
          <path d="M2 26h32L18 10 2 26z"></path>
        </svg>
      </button>
      <p>{post.score}</p>
      <button onClick={() => props.downvotePost(post)}>
        <svg>
          <path d="M2 10h32L18 26 2 10z"></path>
        </svg>
      </button>
    </div>
  );
};

export default connect(null, { upvotePost, downvotePost })(PostVote);
