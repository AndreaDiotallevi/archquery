import React from "react";
import PostTitle from "../PostTitle/PostTitle";
import PostExcerpt from "../PostExcerpt/PostExcerpt";
import PostTags from "../PostTags/PostTags";
import PostSignature from "../PostSignature/PostSignature";

const PostSummary = ({ post }) => {
  return (
    <div className="component-question-summary">
      <PostTitle post={post} />
      <PostExcerpt post={post} />
      <div>
        <PostTags post={post} />
        <PostSignature post={post} />
      </div>
    </div>
  );
};

export default PostSummary;
