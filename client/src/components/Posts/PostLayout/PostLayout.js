import React from "react";
import PostVote from "../PostVote/PostVote";
import PostText from "../PostText/PostText";
import PostInfo from "../PostInfo/PostInfo";

const PostLayout = ({ post }) => {
  return (
    <div className="component-post-layout">
      <PostVote post={post} />
      <div>
        <PostText post={post} />
        <PostInfo post={post} />
      </div>
    </div>
  );
};

export default PostLayout;
