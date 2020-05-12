import React from "react";
import { connect } from "react-redux";
import { createQuestion } from "../../../actions";
import QuestionForm from "../QuestionForm/QuestionForm";

class QuestionCreate extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createQuestion({
      ...formValues,
      ownerUserId: this.props.userId,
    });
  };

  render() {
    return (
      <div>
        <h2>Ask A Public Question</h2>
        <QuestionForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

export default connect(mapStateToProps, { createQuestion })(QuestionCreate);
