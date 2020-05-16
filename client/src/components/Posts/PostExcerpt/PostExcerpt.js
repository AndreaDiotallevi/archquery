import React from "react";

const PostExcerpt = ({ post }) => {
  const { body } = post;

  return (
    <div className="component-question-excerpt">
      <p>{`${body.substring(0, 200)} ${body.length > 200 ? "..." : ""}`}</p>
    </div>
  );
};

export default PostExcerpt;
