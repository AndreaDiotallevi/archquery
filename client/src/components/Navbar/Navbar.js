import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import { fetchUser } from "../../actions";

class NavBar extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn) {
      this.props.fetchUser(this.props.userId);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isSignedIn && !prevProps.isSignedIn) {
      this.props.fetchUser(this.props.userId);
    }
  }

  renderLoggedInStatus() {
    if (!this.props.user) {
      return null;
    } else {
      return (
        <div>
          <p>Logged in as {this.props.user.username}</p>
          <LogOutButton />
        </div>
      );
    }
  }

  renderLoggedOutStatus() {
    return (
      <div>
        <Link to="/users/signup">Sign Up</Link>
        <Link to="/users/login">Log In</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="component-navbar">
        {this.props.isSignedIn
          ? this.renderLoggedInStatus()
          : this.renderLoggedOutStatus()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
    user: state.auth.isSignedIn ? state.users[state.auth.userId] : null,
  };
};

export default connect(mapStateToProps, { fetchUser })(NavBar);
