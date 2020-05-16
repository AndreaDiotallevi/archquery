import React from "react";

const PostText = ({ post }) => {
  return (
    <div>
      <p>{post.body}</p>
    </div>
  );
};

export default PostText;
