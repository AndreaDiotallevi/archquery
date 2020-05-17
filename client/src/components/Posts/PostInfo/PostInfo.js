import React from "react";
import PostMenu from "../PostMenu/PostMenu";
import PostSignature from "../PostSignature/PostSignature";

const PostInfo = ({ post }) => {
  return (
    <div className="component-post-info">
      <PostMenu post={post} />
      <PostSignature post={post} />
    </div>
  );
};

export default PostInfo;
