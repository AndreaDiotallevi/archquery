import React from "react";
import { connect } from "react-redux";
import QuestionRelativeTime from "../QuestionRelativeTime/QuestionRelativeTime";
import QuestionOwnerName from "../QuestionOwnerName/QuestionOwnerName";
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
            <QuestionRelativeTime creationDate={question.creation_date} />
            <QuestionOwnerName ownerUserId={question.owner_user_id} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchQuestion })(QuestionShow);
