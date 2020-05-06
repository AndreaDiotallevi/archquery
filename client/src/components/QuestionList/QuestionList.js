import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuestions } from "../../actions";

class QuestionList extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        {this.props.questions.map((post) => (
          <Link to={`/questions/${post.id}`} key={post.id}>
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
