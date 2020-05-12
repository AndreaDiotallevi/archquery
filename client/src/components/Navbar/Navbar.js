import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";

const NavBar = (props) => {
  if (props.isSignedIn) {
    return (
      <div>
        <LogOutButton />
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/users/signup">Sign Up</Link>
        <Link to="/users/login">Log In</Link>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(NavBar);
