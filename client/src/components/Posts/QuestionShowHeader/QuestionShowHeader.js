import React from "react";
import QuestionAskButton from "../QuestionAskButton/QuestionAskButton";

const QuestionShowHeader = ({ title }) => {
  return (
    <div className="component-question-header">
      <h1>{title}</h1>
      <QuestionAskButton />
    </div>
  );
};

export default QuestionShowHeader;
