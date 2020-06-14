import React from "react";

const PostExcerpt = ({ post }) => {
  const { body } = post;
  const text = body.replace(/<\/?[^>]+(>|$)/g, " ");

  return (
    <div
      className="component-question-excerpt"
      data-test="component-question-excerpt"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `${text.substring(0, 150)}${text.length > 150 ? "..." : ""}`,
        }}
      />
    </div>
  );
};

export default PostExcerpt;
