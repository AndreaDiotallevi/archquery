import React from "react";
import { Field, reduxForm } from "redux-form";

class QuestionForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <p className="error-message">{this.renderError(meta)}</p>
      </div>
    );
  };

  renderTextArea = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        <p className="error-message">{this.renderError(meta)}</p>
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
          component={this.renderTextArea}
          label="Enter Question"
        />
        <button>Post Your Question</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.body) {
    errors.body = "You must enter a body";
  }

  return errors;
};

export default reduxForm({
  form: "questionForm",
  validate,
})(QuestionForm);
