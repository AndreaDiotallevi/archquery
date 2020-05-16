import React from "react";
import PostTitle from "../PostTitle/PostTitle";
import PostRelativeTime from "../PostRelativeTime/PostRelativeTime";
import PostExcerpt from "../PostExcerpt/PostExcerpt";
import PostOwnerName from "../PostOwnerName/PostOwnerName";

const PostSummary = (props) => {
  const { post } = props;

  return (
    <div className="component-question-summary">
      <PostTitle title={post.title} id={post.id} />
      <PostExcerpt body={post.body} />
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

export default PostSummary;
