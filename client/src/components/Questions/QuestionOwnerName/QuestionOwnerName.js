import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../../actions";

class QuestionOwnerName extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.ownerUserId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="component-question-owner-name">
        <p>{user.username}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.ownerUserId],
  };
};

export default connect(mapStateToProps, { fetchUser })(QuestionOwnerName);
