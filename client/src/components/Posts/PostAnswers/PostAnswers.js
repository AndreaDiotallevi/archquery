import React from "react";

const PostAnswers = ({ post }) => {
  const numberOfAnswers = post.answer_count;

  return (
    <div className="component-post-answers" data-test="component-post-answers">
      <p>{numberOfAnswers}</p>
      <p data-test="post-answers-count-text">
        answer{numberOfAnswers !== 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default PostAnswers;
