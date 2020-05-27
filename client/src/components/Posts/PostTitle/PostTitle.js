import React from "react";
import { Link } from "react-router-dom";

const PostTitle = ({ post }) => {
  const { title, id } = post;

  const sanitizeUrl = () => {
    return title
      .split(/[^0-9a-z]/gi)
      .filter((item) => item !== "")
      .join("-")
      .toLowerCase()
      .substring(0, 80);
  };

  return (
    <div className="component-post-title" data-test="component-post-title">
      <Link to={`/questions/${id}/${sanitizeUrl()}`} key={id}>
        {title}
      </Link>
    </div>
  );
};

export default PostTitle;
