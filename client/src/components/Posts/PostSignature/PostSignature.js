import React from "react";
import PostRelativeTime from "../PostRelativeTime/PostRelativeTime";
import PostOwnerName from "../PostOwnerName/PostOwnerName";

const PostSignature = ({ post }) => {
  return (
    <div className="component-post-signature">
      <PostRelativeTime
        creationDate={post.creation_date}
        postTypeId={post.post_type_id}
      />
      <PostOwnerName ownerUserId={post.owner_user_id} />
    </div>
  );
};

export default PostSignature;
