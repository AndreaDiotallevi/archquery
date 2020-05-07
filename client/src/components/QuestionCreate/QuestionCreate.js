import React from "react";
import { connect } from "react-redux";
import { createQuestion } from "../../actions";
import QuestionForm from "../QuestionForm/QuestionForm";

class QuestionCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createQuestion(formValues);
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

export default connect(null, { createQuestion })(QuestionCreate);
