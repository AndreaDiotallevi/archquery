import React from "react";
import PostRelativeTime from "../../Posts/PostRelativeTime/PostRelativeTime";
import PostOwnerName from "../../Posts/PostOwnerName/PostOwnerName";

const AnswerShow = ({ post }) => {
  return (
    <div className="component-answer-show">
      <div>{post.body}</div>
      <div>
        <PostRelativeTime
          creationDate={post.creation_date}
          postTypeId={post.post_type_id}
        />
        <PostOwnerName ownerUserId={post.owner_user_id} />
      </div>
    </div>
  );
};

export default AnswerShow;
