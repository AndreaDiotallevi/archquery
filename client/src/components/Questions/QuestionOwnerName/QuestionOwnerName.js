import React from "react";
import { connect } from "react-redux";

const QuestionOwnerName = (props) => {
  const { user } = props;

  if (!user) {
    return null;
  }

  return (
    <div className="component-question-owner-name">
      <p>{user.username}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.ownerUserId],
  };
};

export default connect(mapStateToProps)(QuestionOwnerName);
