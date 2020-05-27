import React from "react";
import { Link } from "react-router-dom";
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
      <div className="component-login" data-test="component-login">
        <LogInForm onSubmit={this.onSubmit} />
        <p className="error-message">{this.renderErrors()}</p>
        <p>
          Don't have an account? <Link to="/users/signup">Sign Up</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.error, userId: state.auth.userId };
};

export default connect(mapStateToProps, { logIn })(LogIn);
