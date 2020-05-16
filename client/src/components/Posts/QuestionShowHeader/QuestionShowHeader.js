import React from "react";
import PostTitle from "../PostTitle/PostTitle";
import QuestionAskButton from "../QuestionAskButton/QuestionAskButton";

const QuestionShowHeader = ({ post }) => {
  return (
    <div className="component-question-header">
      <PostTitle post={post} />
      <QuestionAskButton />
    </div>
  );
};

export default QuestionShowHeader;
