import React from "react";
import { connect } from "react-redux";
import { fetchQuestion } from "../../actions";

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
      <div>
        <h1>{question.title}</h1>
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
