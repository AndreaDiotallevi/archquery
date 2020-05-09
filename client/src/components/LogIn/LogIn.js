import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../actions";
import LogInForm from "../LogInForm/LogInForm";

class LogIn extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.logIn(formValues);
  };

  render() {
    return (
      <div>
        <LogInForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { logIn })(LogIn);
