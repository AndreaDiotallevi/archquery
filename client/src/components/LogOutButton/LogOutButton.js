import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../actions";

class LogOutButton extends React.Component {
  handleClick = () => {
    this.props.logOut();
  };

  render() {
    return <button onClick={this.handleClick}>Log Out</button>;
  }
}

export default connect(null, { logOut })(LogOutButton);
