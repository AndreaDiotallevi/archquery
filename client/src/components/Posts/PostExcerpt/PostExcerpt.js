import React from "react";

const PostExcerpt = ({ post }) => {
  const { body } = post;
  // const div = document.createElement("div");
  // div.innerHTML = body;
  // const text = div.textContent || div.innerText || "";
  const text = body.replace(/<\/?[^>]+(>|$)/g, " ");

  return (
    <div
      className="component-question-excerpt"
      data-test="component-question-excerpt"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `${text.substring(0, 100)}${text.length > 100 ? "..." : ""}`,
        }}
      />
    </div>
  );
};

export default PostExcerpt;
