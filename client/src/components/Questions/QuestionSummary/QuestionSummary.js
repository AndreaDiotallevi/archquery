import React from "react";
import QuestionTitle from "../QuestionTitle/QuestionTitle";
import PostRelativeTime from "../../Posts/PostRelativeTime/PostRelativeTime";
import QuestionExcerpt from "../QuestionExcerpt/QuestionExcerpt";
import PostOwnerName from "../../Posts/PostOwnerName/PostOwnerName";

const QuestionSummary = (props) => {
  const { post } = props;

  return (
    <div className="component-question-summary">
      <QuestionTitle title={post.title} id={post.id} />
      <QuestionExcerpt body={post.body} />
      <div>
        <PostRelativeTime
          creationDate={post.creation_date}
          postTypeId={post.post_type_id}
        />
        <PostOwnerName ownerUserId={post.owner_user_id} />
      </div>
    </div>
  );
};

export default QuestionSummary;
