import React from "react";
import PostMenu from "../PostMenu/PostMenu";
import PostTags from "../PostTags/PostTags";
import PostSignature from "../PostSignature/PostSignature";

const PostInfo = ({ post }) => {
  return (
    <div className="component-post-info">
      <PostMenu post={post} />
      <div>
        <PostTags post={post} />
        <PostSignature post={post} />
      </div>
    </div>
  );
};

export default PostInfo;
