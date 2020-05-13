import React from "react";
import { connect } from "react-redux";
import { createAnswer } from "../../../actions";
import AnswerForm from "../AnswerForm/AnswerForm";
import history from "../../../history";

class AnswerCreate extends React.Component {
  onSubmit = (formValues) => {
    console.log(this.props);
    console.log(history);
    this.props.createAnswer({
      ...formValues,
      postTypeId: 2,
      ownerUserId: this.props.userId,
      parentId: this.props.questionId,
    });
  };

  render() {
    return (
      <div className="component-answer-create">
        <AnswerForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

export default connect(mapStateToProps, { createAnswer })(AnswerCreate);
