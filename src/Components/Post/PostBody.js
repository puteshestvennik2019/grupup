import React from "react";
import Row from "react-bootstrap/Row";

function PostBody({ selftext, title, read }) {
  return (
    <article className="listing-body">
      <h6 className={read ? "secondary-item" : ""}>{title}</h6>
      <p>{selftext}</p>
    </article>
  );
}

export default PostBody;
