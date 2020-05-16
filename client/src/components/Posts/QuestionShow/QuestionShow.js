import React from "react";
import { connect } from "react-redux";
import QuestionShowHeader from "../QuestionShowHeader/QuestionShowHeader";
import PostLayout from "../PostLayout/PostLayout";
import AnswerList from "../AnswerList/AnswerList";
import AnswerCreate from "../../Answers/AnswerCreate/AnswerCreate";
import { fetchPost } from "../../../actions";

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { question } = this.props;

    if (!question) {
      return null;
    }

    return (
      <div className="component-question-show">
        <div className="container-question-show">
          <QuestionShowHeader title={question.title} />
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
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchPost })(QuestionShow);
