import React from "react";
import { Field, reduxForm } from "redux-form";

class SignUpForm extends React.Component {
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
        <Field name="username" component={this.renderInput} label="Username" />
        <Field name="email" component={this.renderInput} label="Email" />
        <Field name="password" component={this.renderInput} label="Password" />
        <button>Sign Up</button>
      </form>
    );
  }
}

// const validate = (formValues) => {
//   const errors = {};

//   if (!formValues.username) {
//     errors.title = "Username cannot be empty.";
//   }

//   if (!formValues.email) {
//     errors.title = "Email cannot be empty.";
//   }

//   if (!formValues.password) {
//     errors.description = "Password cannot be empty.";
//   }

//   return errors;
// };

export default reduxForm({
  form: "signUpForm",
})(SignUpForm);
