import React from "react";
import { Field, reduxForm } from "redux-form";

class SignUpForm extends React.Component {
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
          name="email"
          component={this.renderInput}
          label="Email"
          type="email"
        />
        <Field
          name="password"
          component={this.renderInput}
          label="Password"
          type="password"
        />
        <button>Sign Up</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Username cannot be empty.";
  }

  if (!formValues.email) {
    errors.email = "Email cannot be empty.";
  } else if (!formValues.email.match(".+@.+..+")) {
    errors.email = `${formValues.email} is not a valid email address.`;
  }

  if (!formValues.password) {
    errors.password = "Password cannot be empty.";
  } else if (formValues.password.length < 8) {
    errors.password = "Password must contain at least 8 characters.";
  }

  return errors;
};

export default reduxForm({
  form: "signUpForm",
  validate,
})(SignUpForm);
