import React from "react";
import PostStats from "../PostStats/PostStats";
import PostTitle from "../PostTitle/PostTitle";
import PostExcerpt from "../PostExcerpt/PostExcerpt";
import PostTags from "../PostTags/PostTags";
import PostSignature from "../PostSignature/PostSignature";

const PostSummary = ({ post }) => {
  return (
    <div
      className="component-question-summary"
      data-test="component-post-summary"
    >
      <PostStats post={post} />
      <div className="summary-right">
        <PostTitle post={post} />
        <PostExcerpt post={post} />
        <div>
          <PostTags post={post} />
          <PostSignature post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
