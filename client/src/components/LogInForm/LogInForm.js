import React from "react";
import { Field, reduxForm } from "redux-form";

class LogInForm extends React.Component {
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
        <Field name="password" component={this.renderInput} label="Password" />
        <button>Sign Up</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "logInForm",
})(LogInForm);
