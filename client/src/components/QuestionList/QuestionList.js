import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuestions } from "../../actions";
import RelativeTime from "../RelativeTime/RelativeTime";

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
      <div className="component-question-list">
        {this.props.questions.map((post) => (
          <React.Fragment key={post.id}>
            <Link
              to={`/questions/${post.id}/${this.sanitizeUrl(post.title)}`}
              key={post.id}
            >
              {post.title}
            </Link>
            <RelativeTime timestamp={post.creation_date} />
          </React.Fragment>
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
