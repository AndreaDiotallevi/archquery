import React from "react";
import { Field, reduxForm } from "redux-form";

class QuestionForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="body"
          component={this.renderInput}
          label="Enter Question"
        />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a body";
  }

  return errors;
};

export default reduxForm({
  form: "questionForm",
  validate,
})(QuestionForm);
