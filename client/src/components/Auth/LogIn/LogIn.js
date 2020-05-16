import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../../actions";
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

  renderErrors = () => {
    if (this.props.error === {}) {
      return null;
    } else {
      return this.props.error.message;
    }
  };

  render() {
    return (
      <div className="component-login">
        <LogInForm onSubmit={this.onSubmit} />
        <p className="error-message">{this.renderErrors()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.error };
};

export default connect(mapStateToProps, { logIn })(LogIn);
