import React from "react";
import PostText from "../PostText/PostText";
import PostInfo from "../PostInfo/PostInfo";

const PostLayout = ({ post }) => {
  return (
    <div>
      <PostText post={post} />
      <PostInfo post={post} />
    </div>
  );
};

export default PostLayout;
