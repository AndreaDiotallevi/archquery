import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <div>{user.username}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchUser })(Profile);
