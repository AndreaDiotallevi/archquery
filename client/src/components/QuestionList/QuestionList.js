import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuestions } from "../../actions";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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

  calculateRelativeTime = (timestamp) => {
    const creationDate = new Date(Date.parse(timestamp));
    const creationDateMilliseconds = creationDate.getTime();
    const currentTimeMilliseconds = new Date().getTime();
    const relativeTimeInSeconds = Math.round(
      (currentTimeMilliseconds - creationDateMilliseconds) / 1000
    );
    if (relativeTimeInSeconds < 60) {
      return `asked ${relativeTimeInSeconds} second${
        relativeTimeInSeconds > 1 ? "s" : ""
      } ago`;
    } else if (relativeTimeInSeconds >= 60 && relativeTimeInSeconds < 3600) {
      const relativeTimeInMinutes = Math.round(relativeTimeInSeconds / 60);
      return `asked ${relativeTimeInMinutes} min${
        relativeTimeInMinutes > 1 ? "s" : ""
      } ago`;
    } else if (relativeTimeInSeconds > 3600 && relativeTimeInSeconds < 86400) {
      const relativeTimeInHours = Math.round(relativeTimeInSeconds / 60 / 60);
      return `asked ${relativeTimeInHours} hour${
        relativeTimeInHours > 1 ? "s" : ""
      } ago`;
    } else if (
      relativeTimeInSeconds > 86400 &&
      relativeTimeInSeconds < 172800
    ) {
      const relativeTimeInDays = Math.round(
        relativeTimeInSeconds / 60 / 60 / 24
      );
      return `asked ${relativeTimeInDays} day${
        relativeTimeInDays > 1 ? "s" : ""
      } ago`;
    } else {
      console.log(creationDate);
      const month = months[creationDate.getMonth()];
      const date = creationDate.getDate();
      const year = creationDate.getFullYear();
      const hours = creationDate.getHours();
      const minutes = creationDate.getMinutes();
      return `asked ${month} ${date} ${year} at ${hours}:${minutes}`;
    }
  };

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
            <div>{this.calculateRelativeTime(post.creation_date)}</div>
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
