import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuestions } from "../../actions";

class QuestionList extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  sanitizeUrl(title) {
    return title
      .split(/[^0-9a-z]/gi)
      .filter((item) => item !== "")
      .join("-")
      .toLowerCase()
      .substring(0, 80);
  }

  render() {
    return (
      <div>
        {this.props.questions.map((post) => (
          <Link
            to={`/questions/${post.id}/${this.sanitizeUrl(post.title)}`}
            key={post.id}
          >
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
