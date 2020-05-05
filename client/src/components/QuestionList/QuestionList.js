import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuestions } from "../../actions";

class QuestionList extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        {this.props.questions.map((post) => (
          <Link to={`/questions/${post._id}`} key={post._id}>
            {post.title}
          </Link>
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

export default connect(mapStateToProps, { fetchQuestions })(QuestionList);
