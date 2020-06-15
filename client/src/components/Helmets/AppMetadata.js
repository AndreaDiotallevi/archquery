import React from "react";
import { Helmet } from "react-helmet";

const AppMetadata = () => {
  const title = "Archquery - Where Architects Learn, Share, and Build Careers";
  const description =
    "Archquery is the online community for architects to learn, share their knowledge, and build their careers.";
  const url = "http://www.archquery.com/";

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

export default AppMetadata;
