import React from "react";
import { Helmet } from "react-helmet";

const QuestionShowHelmet = ({ question }) => {
  const title = `${question.tags.length !== 0 ? `${question.tags[0]} - ` : ""}${
    question.title
  } - Archquery`;
  const description = question.body.replace(/<\/?[^>]+(>|$)/g, " ");
  const url = `http://www.archquery.com/questions/${
    question.id
  }/${question.title
    .split(/[^0-9a-z]/gi)
    .filter((item) => item !== "")
    .join("-")
    .toLowerCase()
    .substring(0, 80)}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" content={url} />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:title"
        content={title}
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:description"
        content={description}
      />
    </Helmet>
  );
};

export default QuestionShowHelmet;
