import React from "react";
import { connect } from "react-redux";
import QuestionShowMetadata from "../../Helmets/QuestionShowMetadata";
import QuestionShowHeader from "../QuestionShowHeader/QuestionShowHeader";
import PostTags from "../PostTags/PostTags";
import PostLayout from "../PostLayout/PostLayout";
import AnswerList from "../AnswerList/AnswerList";
import AnswerCreate from "../AnswerCreate/AnswerCreate";
import { fetchPost } from "../../../actions";

class QuestionShow extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { question } = this.props;

    if (!question) {
      return null;
    }

    return (
      <div
        className="component-question-show"
        data-test="component-question-show"
      >
        <QuestionShowMetadata question={question} />
        <div className="container-question-show">
          <QuestionShowHeader post={question} />
          <PostTags post={question} />
          <PostLayout post={question} />
          <AnswerList questionId={question.id} />
          <AnswerCreate questionId={question.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.posts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchPost })(QuestionShow);
