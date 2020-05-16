import React from "react";
import { Link } from "react-router-dom";

const PostTitle = ({ title, id }) => {
  const sanitizeUrl = () => {
    return title
      .split(/[^0-9a-z]/gi)
      .filter((item) => item !== "")
      .join("-")
      .toLowerCase()
      .substring(0, 80);
  };

  return (
    <div className="component-question-title">
      <Link to={`/questions/${id}/${sanitizeUrl()}`} key={id}>
        {title}
      </Link>
    </div>
  );
};

export default PostTitle;
