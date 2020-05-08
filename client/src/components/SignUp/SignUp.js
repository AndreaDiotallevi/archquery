import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions";
import SignUpForm from "../SignUpForm/SignUpForm";

class SignUp extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.signUp(formValues);
  };

  render() {
    return (
      <div>
        <SignUpForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { signUp })(SignUp);
