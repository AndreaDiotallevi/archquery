import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchPost, editPost } from "../../../actions";
import PostForm from "../PostForm/PostForm";

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editPost(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.post) {
      return null;
    }

    const { post } = this.props;
    return (
      <div>
        <h3>Edit the Post</h3>
        <PostForm
          postTypeId={post.post_type_id}
          initialValues={_.pick(post, "title", "body")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapToStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapToStateToProps, { fetchPost, editPost })(PostEdit);
