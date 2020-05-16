import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../../actions";
import QuestionForm from "../QuestionForm/QuestionForm";

class QuestionCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createPost({
      ...formValues,
      postTypeId: 1,
      ownerUserId: this.props.userId,
    });
  };

  render() {
    return (
      <div className="component-question-create">
        <h1>Ask A Public Question</h1>
        <QuestionForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

export default connect(mapStateToProps, { createPost })(QuestionCreate);
