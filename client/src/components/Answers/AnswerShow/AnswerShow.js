import React from "react";
import QuestionRelativeTime from "../../Questions/QuestionRelativeTime/QuestionRelativeTime";
import QuestionOwnerName from "../../Questions/QuestionOwnerName/QuestionOwnerName";

const AnswerShow = ({ post }) => {
  return (
    <div className="component-answer-show">
      <div>{post.body}</div>
      <div>
        <QuestionRelativeTime creationDate={post.creation_date} />
        <QuestionOwnerName ownerUserId={post.owner_user_id} />
      </div>
    </div>
  );
};

export default AnswerShow;
