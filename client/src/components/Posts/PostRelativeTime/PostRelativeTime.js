import React from "react";
import months from "../../../utils/months";

const PostRelativeTime = ({ creationDate, postTypeId }) => {
  const calculateRelativeTime = () => {
    const date = new Date(Date.parse(creationDate));
    const seconds = Math.round((new Date().getTime() - date.getTime()) / 1000);

    if (seconds < 30) {
      return "just now";
    } else if (seconds < 60) {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    } else if (seconds >= 60 && seconds < 3600) {
      const minutes = Math.round(seconds / 60);
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    } else if (seconds > 3600 && seconds < 86400) {
      const hours = Math.floor(seconds / 60 / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (seconds > 86400 && seconds < 172800) {
      const days = Math.round(seconds / 60 / 60 / 24);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else {
      return `${
        months[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
    }
  };

  return (
    <div
      className="component-relative-time"
      data-test="component-relative-time"
    >
      <p>{`${
        postTypeId === 1 ? "asked" : "answered"
      } ${calculateRelativeTime()}`}</p>
    </div>
  );
};

export default PostRelativeTime;
