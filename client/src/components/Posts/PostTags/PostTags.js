import React from "react";
import { Link } from "react-router-dom";

const PostTags = ({ post }) => {
  if (!post.tags) {
    return null;
  }

  return (
    <div className="component-post-tags">
      {post.tags.map((tag) => (
        <Link to={`/questions/tagged/${tag}`} key={tag}>
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default PostTags;
