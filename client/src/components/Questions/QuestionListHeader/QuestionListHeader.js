import React from "react";
import QuestionAskButton from "../QuestionAskButton/QuestionAskButton";

const QuestionListHeader = () => {
  return (
    <div className="component-question-list-header">
      <h1>All Questions</h1>
      <QuestionAskButton />
    </div>
  );
};

export default QuestionListHeader;
