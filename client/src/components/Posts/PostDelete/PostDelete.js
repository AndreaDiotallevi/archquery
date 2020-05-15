import React from "react";
import { deletePost } from "../../../actions";
import { connect } from "react-redux";

const PostDelete = (props) => {
  const handleClick = () => {
    props.deletePost(props.postId);
  };

  return (
    <div className="component-post-delete">
      <button onClick={handleClick}>Delete Post</button>
    </div>
  );
};

export default connect(null, { deletePost })(PostDelete);
