import React from "react";
import { connect } from "react-redux";
import { createPostAndAddAnswerCount } from "../../../actions";
import PostForm from "../PostForm/PostForm";

class AnswerCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createPostAndAddAnswerCount({
      ...formValues,
      postTypeId: 2,
      ownerUserId: this.props.userId,
      parentId: this.props.questionId,
    });
  };

  render() {
    if (!this.props.userId) {
      return (
        <div>
          <p className="error-message">
            To answer a question, you must sign up for an account.
          </p>
        </div>
      );
    }

    return (
      <div className="component-answer-create">
        <PostForm
          postTypeId={2}
          initialValues={{ body: "" }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

export default connect(mapStateToProps, { createPostAndAddAnswerCount })(
  AnswerCreate
);
