import React from "react";
import PostRelativeTime from "../PostRelativeTime/PostRelativeTime";
import PostOwnerName from "../PostOwnerName/PostOwnerName";

const PostSignature = ({ post }) => {
  return (
    <div>
      <PostRelativeTime creationDate={post.creation_date} />
      <PostOwnerName ownerUserId={post.owner_user_id} />
    </div>
  );
};

export default PostSignature;
