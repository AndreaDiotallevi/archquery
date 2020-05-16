import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../../../actions";
import PostLayout from "../../Posts/PostLayout/PostLayout";

class AnswerList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers(2, this.props.questionId);
  }

  render() {
    return (
      <div className="component-answer-list">
        <div className="container-answer-list">
          {this.props.answers.map((post) => (
            <PostLayout post={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    answers: Object.values(state.posts).filter(
      (answer) => answer.parent_id === ownProps.questionId
    ),
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(AnswerList);
