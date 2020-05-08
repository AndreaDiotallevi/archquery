import React from "react";
import { Link } from "react-router-dom";
import RelativeTime from "../RelativeTime/RelativeTime";
import QuestionExcerpt from "../QuestionExcerpt/QuestionExcerpt";
import QuestionOwnerName from "../QuestionOwnerName/QuestionOwnerName";

const QuestionSummary = (props) => {
  const { post } = props;

  const sanitizeUrl = (title) => {
    return title
      .split(/[^0-9a-z]/gi)
      .filter((item) => item !== "")
      .join("-")
      .toLowerCase()
      .substring(0, 80);
  };

  return (
    <div className="component-question-summary">
      <Link
        to={`/questions/${post.id}/${sanitizeUrl(post.title)}`}
        key={post.id}
      >
        {post.title}
      </Link>
      <QuestionExcerpt body={post.body} />
      <RelativeTime creationDate={post.creation_date} />
      <QuestionOwnerName ownerUserId={post.owner_user_id} />
    </div>
  );
};

export default QuestionSummary;
