import React from "react";
import PostAnswers from "../PostAnswers/PostAnswers";

const PostStats = ({ post }) => {
  return (
    <div className="component-post-stats">
      <PostAnswers post={post} />
    </div>
  );
};

export default PostStats;
