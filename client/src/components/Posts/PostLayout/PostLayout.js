import React from "react";
import PostText from "../PostText/PostText";
import PostInfo from "../PostInfo/PostInfo";

const PostLayout = ({ post }) => {
  return (
    <div className="component-post-layout">
      <PostText post={post} />
      <PostInfo post={post} />
    </div>
  );
};

export default PostLayout;
