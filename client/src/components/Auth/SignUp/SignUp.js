import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../actions";
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
    this.props.signUp(formValues);
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
      <div className="component-signup">
        <SignUpForm onSubmit={this.onSubmit} />
        <p className="error-message">{this.renderErrors()}</p>
        <p>
          Already have an account? <Link to="/users/login">Log In</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.error };
};

export default connect(mapStateToProps, { signUp })(SignUp);
