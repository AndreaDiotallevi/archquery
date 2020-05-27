import React from "react";

const PostText = ({ post }) => {
  return (
    <div className="component-post-text" data-test="component-post-text">
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default PostText;
