import React from "react";
import { Link } from "react-router-dom";

const QuestionAskButton = () => {
  return (
    <div className="component-question-ask-button">
      <Link to="/questions/ask">Ask Question</Link>
    </div>
  );
};

export default QuestionAskButton;
