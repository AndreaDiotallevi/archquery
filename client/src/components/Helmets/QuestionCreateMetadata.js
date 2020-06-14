import React from "react";
import { Helmet } from "react-helmet";

const QuestionCreateMetadata = () => {
  const title = "Ask a Question - Archquery";
  const url = "http://www.archquery.com/questions/ask";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <link rel="canonical" content={url} />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:title"
        content={title}
      />
    </Helmet>
  );
};

export default QuestionCreateMetadata;
