import React from "react";
import { connect } from "react-redux";
import PostRelativeTime from "../../Posts/PostRelativeTime/PostRelativeTime";
import PostOwnerName from "../../Posts/PostOwnerName/PostOwnerName";
import PostDelete from "../../Posts/PostDelete/PostDelete";
import AnswerList from "../../Answers/AnswerList/AnswerList";
import AnswerCreate from "../../Answers/AnswerCreate/AnswerCreate";
import { fetchQuestion } from "../../../actions";

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.id);
  }

  render() {
    const { question } = this.props;

    if (!question) {
      return null;
    }

    return (
      <div className="component-question-show">
        <div className="container-question-show">
          <h1>{question.title}</h1>
          <p>{question.body}</p>
          <div>
            <PostRelativeTime creationDate={question.creation_date} />
            <PostOwnerName ownerUserId={question.owner_user_id} />
            <PostDelete postId={question.id} />
          </div>
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

export default connect(mapStateToProps, { fetchQuestion })(QuestionShow);
