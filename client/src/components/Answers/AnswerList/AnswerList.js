import React from "react";
import { connect } from "react-redux";
import { fetchAnswersAndUsers } from "../../../actions";
import AnswerShow from "../AnswerShow/AnswerShow";

class AnswerList extends React.Component {
  componentDidMount() {
    this.props.fetchAnswersAndUsers(this.props.questionId);
  }

  render() {
    return (
      <div className="component-answer-list">
        <div className="container-answer-list">
          {this.props.answers.map((post) => (
            <AnswerShow post={post} key={post.id} />
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

export default connect(mapStateToProps, { fetchAnswersAndUsers })(AnswerList);
