import React from "react";
import Row from "react-bootstrap/Row";

function PostBody({ selftext, title }) {
  return (
    <article className="listing-body">
      <h6>{title}</h6>
      <p>{selftext}</p>
    </article>
  );
}

export default PostBody;
