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
    this.props.signUp(formValues);
  };

  renderErrors = () => {
    if (this.props.error === {}) {
      return null;
    } else {
      return <p>{this.props.error.message}</p>;
    }
  };

  render() {
    return (
      <div>
        <SignUpForm onSubmit={this.onSubmit} />
        {this.renderErrors()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.error };
};

export default connect(mapStateToProps, { signUp })(SignUp);
