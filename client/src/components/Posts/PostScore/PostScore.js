import React from "react";

const PostScore = ({ post }) => {
  const score = post.score;

  return (
    <div className="component-post-score" data-test="component-post-score">
      <p>{score}</p>
      <p>vote{score !== 1 ? "s" : ""}</p>
    </div>
  );
};

export default PostScore;
