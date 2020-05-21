import React from "react";

const PostStats = ({ post }) => {
  const numberOfAnswers = post.answer_count;

  return (
    <div className="component-post-answers">
      <p>{numberOfAnswers}</p>
      <p>answer{numberOfAnswers > 1 ? "s" : ""}</p>
    </div>
  );
};

export default PostStats;
