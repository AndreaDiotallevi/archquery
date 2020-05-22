import React from "react";

const PostVote = ({ post }) => {
  return (
    <div className="component-post-vote">
      <button>
        <svg>
          <path d="M2 26h32L18 10 2 26z"></path>
        </svg>
      </button>
      <p>{post.score}</p>
      <button>
        <svg>
          <path d="M2 10h32L18 26 2 10z"></path>
        </svg>
      </button>
    </div>
  );
};

export default PostVote;
