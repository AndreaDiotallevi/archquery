import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../../../actions";
import PostLayout from "../PostLayout/PostLayout";

class AnswerList extends React.Component {
  componentDidMount = () => {
    this.props.fetchPostsAndUsers(2, this.props.questionId);
  };

  renderHeader = () => {
    const numberOfAnswers = this.props.answers.length;

    if (numberOfAnswers > 0) {
      return (
        <h1>
          {numberOfAnswers} Answer{numberOfAnswers > 1 ? "s" : ""}
        </h1>
      );
    }
  };

  render() {
    return (
      <div className="component-answer-list">
        {this.renderHeader()}
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
