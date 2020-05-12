import React from "react";
import QuestionTitle from "../QuestionTitle/QuestionTitle";
import QuestionRelativeTime from "../QuestionRelativeTime/QuestionRelativeTime";
import QuestionExcerpt from "../QuestionExcerpt/QuestionExcerpt";
import QuestionOwnerName from "../QuestionOwnerName/QuestionOwnerName";

const QuestionSummary = (props) => {
  const { post } = props;

  return (
    <div className="component-question-summary">
      <QuestionTitle title={post.title} id={post.id} />
      <QuestionExcerpt body={post.body} />
      <div>
        <QuestionRelativeTime creationDate={post.creation_date} />
        <QuestionOwnerName ownerUserId={post.owner_user_id} />
      </div>
    </div>
  );
};

export default QuestionSummary;
