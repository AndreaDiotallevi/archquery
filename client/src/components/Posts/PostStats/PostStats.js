import React from "react";
import PostScore from "../PostScore/PostScore";
import PostAnswers from "../PostAnswers/PostAnswers";

const PostStats = ({ post }) => {
  return (
    <div className="component-post-stats" data-test="component-post-stats">
      <PostScore post={post} />
      <PostAnswers post={post} />
    </div>
  );
};

export default PostStats;
