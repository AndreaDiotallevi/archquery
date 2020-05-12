import React from "react";
import { Field, reduxForm } from "redux-form";

class LogInForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <p className="error-message">{error}</p>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="username" component={this.renderInput} label="Username" />
        <Field name="password" component={this.renderInput} label="Password" />
        <button>Log In</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Email cannot be empty.";
  }

  if (!formValues.password) {
    errors.password = "Password cannot be empty.";
  }

  return errors;
};

export default reduxForm({
  form: "logInForm",
  validate,
})(LogInForm);
