import React from "react";
import {
  deletePost,
  deletePostAndDecrementAnswerCount,
} from "../../../actions";
import { connect } from "react-redux";

const PostDelete = (props) => {
  const { post } = props;

  const handleClick = () => {
    if (!post.parent_id) {
      props.deletePost(post.id, post.post_type_id);
    } else {
      props.deletePostAndDecrementAnswerCount(
        post.id,
        post.post_type_id,
        post.parent_id
      );
    }
    props.deletePost(post.id, post.parent_id);
  };

  return (
    <div className="component-post-delete" data-test="component-post-delete">
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default connect(null, { deletePost, deletePostAndDecrementAnswerCount })(
  PostDelete
);
