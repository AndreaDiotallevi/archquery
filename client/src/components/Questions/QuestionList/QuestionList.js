import React from "react";
import { connect } from "react-redux";
import { fetchQuestionsAndUsers } from "../../../actions";
import QuestionSummary from "../QuestionSummary/QuestionSummary";

class QuestionList extends React.Component {
  componentDidMount() {
    this.props.fetchQuestionsAndUsers();
  }

  render() {
    return (
      <div className="component-question-list">
        {this.props.questions.map((post) => (
          <QuestionSummary post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.questions),
  };
};

export default connect(mapStateToProps, { fetchQuestionsAndUsers })(
  QuestionList
);
