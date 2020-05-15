import React from "react";
import { Field, reduxForm, reset } from "redux-form";

class AnswerForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderTextArea = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        <p className="error-message">{this.renderError(meta)}</p>
      </div>
    );
  };

  onSubmit = (formValues, dispatch) => {
    this.props.onSubmit(formValues);
    dispatch(reset("answerForm"));
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="body"
          component={this.renderTextArea}
          label="Your Answer"
        />
        <button>Post Your Answer</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.body) {
    errors.body = "You must enter a body";
  }

  return errors;
};

export default reduxForm({
  form: "answerForm",
  validate,
})(AnswerForm);
