import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers, clearPosts } from "../../../actions";
import PostSummary from "../PostSummary/PostSummary";
import QuestionListHeader from "../QuestionListHeader/QuestionListHeader";

class QuestionList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers(1, null, this.getSelectedTag());
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.clearPosts();
      this.props.fetchPostsAndUsers(1, null, this.getSelectedTag());
    }
  }

  getSelectedTag = () => {
    return this.props.match ? this.props.match.params.tag : null;
  };

  render() {
    return (
      <div
        className="component-question-list"
        data-test="component-question-list"
      >
        <div className="container-question-list">
          <QuestionListHeader tag={this.props.match.params.tag} />
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

export default connect(mapStateToProps, {
  fetchPostsAndUsers,
  clearPosts,
})(QuestionList);
