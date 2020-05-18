import React from "react";
import QuestionAskButton from "../QuestionAskButton/QuestionAskButton";

const QuestionListHeader = ({ tag }) => {
  const renderHeader = () => {
    if (!tag) return "All Questions";
    return `Questions tagged [${tag}]`;
  };

  return (
    <div className="component-question-list-header">
      <h1>{renderHeader()}</h1>
      <QuestionAskButton />
    </div>
  );
};

export default QuestionListHeader;
