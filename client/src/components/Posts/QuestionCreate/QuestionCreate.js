import React from "react";
import { connect } from "react-redux";
import { createPostAndTags, fetchTags } from "../../../actions";
import QuestionCreateMetadata from "../../Helmets/QuestionCreateMetadata";
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
      tags: formValues.tags ? formValues.tags.trim().split(" ") : [],
      postTypeId: 1,
      ownerUserId: this.props.userId,
    });
  };

  render() {
    return (
      <div
        className="component-question-create"
        data-test="component-question-create"
      >
        <QuestionCreateMetadata />
        <h1>Ask A Public Question</h1>
        <PostForm
          postTypeId={1}
          initialValues={{ title: "", body: "", tags: "" }}
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
