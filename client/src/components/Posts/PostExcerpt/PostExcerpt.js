import React from "react";

const PostExcerpt = ({ post }) => {
  const { body } = post;

  return (
    <div
      className="component-question-excerpt"
      data-test="component-question-excerpt"
    >
      <div
        data-test="question-excerpt-text"
        dangerouslySetInnerHTML={{
          __html: `${body.substring(0, 200)}${body.length > 200 ? "..." : ""}`,
        }}
      />
    </div>
  );
};

export default PostExcerpt;
