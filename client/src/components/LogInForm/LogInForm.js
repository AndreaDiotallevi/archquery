import React from "react";
import { Field, reduxForm } from "redux-form";

class LogInForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderInput = ({ input, label, type, meta }) => {
    const className = `${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={type} />
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
        <Field
          name="username"
          component={this.renderInput}
          label="Username"
          type="text"
        />
        <Field
          name="password"
          component={this.renderInput}
          label="Password"
          type="password"
        />
        <button>Log In</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Username cannot be empty.";
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
