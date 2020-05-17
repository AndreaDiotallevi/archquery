import React from "react";
import PostTitle from "../PostTitle/PostTitle";
import PostExcerpt from "../PostExcerpt/PostExcerpt";
import PostSignature from "../PostSignature/PostSignature";

const PostSummary = ({ post }) => {
  return (
    <div className="component-question-summary">
      <PostTitle post={post} />
      {/* <PostExcerpt post={post} /> */}
      <PostSignature post={post} />
    </div>
  );
};

export default PostSummary;
