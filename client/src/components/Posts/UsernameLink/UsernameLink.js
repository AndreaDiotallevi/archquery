import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class UsernameLink extends React.Component {
  sanitizeUrl = () => {
    return this.props.user.username
      .split(/[^0-9a-z]/gi)
      .filter((item) => item !== "")
      .join("-")
      .toLowerCase()
      .substring(0, 80);
  };

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div
        className="component-username-link"
        data-test="component-username-link"
      >
        <Link to={`/users/${user.id}/${this.sanitizeUrl()}`}>
          {user.username}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.userId],
  };
};

export default connect(mapStateToProps)(UsernameLink);
