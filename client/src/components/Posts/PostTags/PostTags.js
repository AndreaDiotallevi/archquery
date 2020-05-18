import React from "react";

const PostTags = ({ post }) => {
  if (!post.tags) {
    return null;
  }

  return (
    <div>
      {post.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
    </div>
  );
};

export default PostTags;
