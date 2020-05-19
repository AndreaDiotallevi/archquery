import React from "react";
import { connect } from "react-redux";
import { createPostAndTags, fetchTags } from "../../../actions";
import PostForm from "../PostForm/PostForm";
import history from "../../../history";

class QuestionCreate extends React.Component {
  componentDidMount = () => {
    if (!this.props.userId) {
      history.push("/users/login");
    }
    this.props.fetchTags();
  };

  onSubmit = (formValues) => {
    this.props.createPostAndTags({
      ...formValues,
      tags: formValues.tags ? formValues.tags.split(" ") : null,
      postTypeId: 1,
      ownerUserId: this.props.userId,
    });
  };

  render() {
    return (
      <div className="component-question-create">
        <h1>Ask A Public Question</h1>
        <PostForm
          postTypeId={1}
          initialValues={{ title: "", body: "" }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.userId, tags: state.tags };
};

export default connect(mapStateToProps, { createPostAndTags, fetchTags })(
  QuestionCreate
);
