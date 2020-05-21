import React from "react";
import { connect } from "react-redux";
import { fetchPost, editPostAndTags } from "../../../actions";
import PostForm from "../PostForm/PostForm";

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editPostAndTags(this.props.match.params.id, {
      ...formValues,
      tags: formValues.tags ? formValues.tags.split(" ") : [],
      answerCount: this.props.post.answer_count,
    });
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
          initialValues={{
            title: post.title,
            body: post.body,
            tags: post.tags ? post.tags.join(" ") : "",
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapToStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapToStateToProps, { fetchPost, editPostAndTags })(
  PostEdit
);
