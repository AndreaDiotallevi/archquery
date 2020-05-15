import React from "react";
import { connect } from "react-redux";
import PostRelativeTime from "../../Posts/PostRelativeTime/PostRelativeTime";
import PostOwnerName from "../../Posts/PostOwnerName/PostOwnerName";
import PostDelete from "../../Posts/PostDelete/PostDelete";

const AnswerShow = ({ post, userId }) => {
  return (
    <div className="component-answer-show">
      <div>{post.body}</div>
      <div>
        <PostRelativeTime
          creationDate={post.creation_date}
          postTypeId={post.post_type_id}
        />
        <PostOwnerName ownerUserId={post.owner_user_id} />
        {userId === post.owner_user_id && <PostDelete postId={post.id} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(AnswerShow);
