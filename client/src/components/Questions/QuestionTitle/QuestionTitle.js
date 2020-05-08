import React from "react";
import { Link } from "react-router-dom";

const QuestionTitle = ({ title, id }) => {
  const sanitizeUrl = () => {
    return title
      .split(/[^0-9a-z]/gi)
      .filter((item) => item !== "")
      .join("-")
      .toLowerCase()
      .substring(0, 80);
  };

  return (
    <Link to={`/questions/${id}/${sanitizeUrl()}`} key={id}>
      {title}
    </Link>
  );
};

export default QuestionTitle;
