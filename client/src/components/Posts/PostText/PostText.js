import React from "react";

const PostText = ({ post }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default PostText;
