import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../../actions";
import PostForm from "../PostForm/PostForm";
import history from "../../../history";

class QuestionCreate extends React.Component {
  componentDidMount() {
    if (!this.props.userId) {
      history.push("/users/login");
    }
  }

  onSubmit = (formValues) => {
    this.props.createPost({
      ...formValues,
      postTypeId: 1,
      ownerUserId: this.props.userId,
    });
  };

  render() {
    return (
      <div className="component-question-create">
        <h1>Ask A Public Question</h1>
        <PostForm onSubmit={this.onSubmit} postTypeId={1} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

export default connect(mapStateToProps, { createPost })(QuestionCreate);
