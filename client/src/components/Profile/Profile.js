import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  calculateRelativeTime = () => {
    const date = new Date(Date.parse(this.props.user.creation_date));
    const seconds = Math.round((new Date().getTime() - date.getTime()) / 1000);

    if (seconds < 2678400) {
      const days = Math.ceil(seconds / 86400);
      return `${days} day${days > 1 ? "s" : ""}`;
    } else if (seconds < 31536000) {
      const months = Math.floor(seconds / 2678400);
      return `${months} month${months > 1 ? "s" : ""}`;
    } else {
      const months = Math.round(seconds / 2678400) % 12;
      const years = Math.floor(seconds / 31536000);
      return `${years} year${years > 1 ? "s" : ""}${
        months > 0 ? `${`, ${months} month${months > 1 ? "s" : ""}`}` : ""
      }`;
    }
  };

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <h1>{user.username}</h1>
        <p>Member for {this.calculateRelativeTime()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchUser })(Profile);
