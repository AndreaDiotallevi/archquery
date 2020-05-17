import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../../../actions";
import PostSummary from "../PostSummary/PostSummary";
import QuestionListHeader from "../QuestionListHeader/QuestionListHeader";

class QuestionList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers(1, null);
  }

  render() {
    return (
      <div className="component-question-list">
        <div className="container-question-list">
          <QuestionListHeader />
          {this.props.questions.map((post) => (
            <PostSummary post={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.posts)
      .filter((post) => post.post_type_id === 1)
      .reverse(),
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(QuestionList);
