import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../../actions";
import AnswerForm from "../AnswerForm/AnswerForm";

class AnswerCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createPost({
      ...formValues,
      postTypeId: 2,
      ownerUserId: this.props.userId,
      parentId: this.props.questionId,
    });
  };

  render() {
    return (
      <div className="component-answer-create">
        <AnswerForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

export default connect(mapStateToProps, { createPost })(AnswerCreate);
