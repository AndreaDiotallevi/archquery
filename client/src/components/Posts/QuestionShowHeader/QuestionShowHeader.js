import React from "react";
import PostTitle from "../PostTitle/PostTitle";

const QuestionShowHeader = ({ post }) => {
  return (
    <div className="component-question-header">
      <PostTitle post={post} />
    </div>
  );
};

export default QuestionShowHeader;
