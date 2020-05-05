import React from "react";
import { connect } from "react-redux";
import { fetchQuestion } from "../../actions";

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>{this.props.question.title}</h1>
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
