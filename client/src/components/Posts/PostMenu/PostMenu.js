import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PostDelete from "../PostDelete/PostDelete";

const PostMenu = ({ post, userId }) => {
  const renderMenu = () => {
    if (post.owner_user_id === userId) {
      return (
        <React.Fragment>
          <Link to={`/posts/${post.id}/edit`}>Edit</Link>
          <PostDelete postId={post.id} />
        </React.Fragment>
      );
    }
    return null;
  };

  return <div className="component-post-menu">{renderMenu()}</div>;
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(PostMenu);
