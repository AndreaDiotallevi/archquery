import React from "react";
import { Helmet } from "react-helmet";

const ProfileMetadata = ({ user }) => {
  const title = `User ${user.username} - Archquery`;
  const url = `http://www.archquery.com/users/${user.id}/${user.username
    .split(/[^0-9a-z]/gi)
    .filter((item) => item !== "")
    .join("-")
    .toLowerCase()
    .substring(0, 80)}`;

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

export default ProfileMetadata;
