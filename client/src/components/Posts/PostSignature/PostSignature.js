import React from "react";
import PostRelativeTime from "../PostRelativeTime/PostRelativeTime";
import UsernameLink from "../UsernameLink/UsernameLink";

const PostSignature = ({ post }) => {
  return (
    <div className="component-post-signature">
      <PostRelativeTime
        creationDate={post.creation_date}
        postTypeId={post.post_type_id}
      />
      <UsernameLink userId={post.owner_user_id} />
    </div>
  );
};

export default PostSignature;
