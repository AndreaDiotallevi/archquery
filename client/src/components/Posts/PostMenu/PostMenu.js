import React from "react";
import { connect } from "react-redux";
import PostDelete from "../PostDelete/PostDelete";

const PostMenu = ({ post, userId }) => {
  const renderMenu = () => {
    if (post.owner_user_id === userId) {
      return <PostDelete postId={post.id} />;
    }
    return null;
  };

  return <div>{renderMenu()}</div>;
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(PostMenu);
