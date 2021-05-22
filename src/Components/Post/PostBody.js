import React from "react";
import parse from "html-react-parser";

function PostBody({ text, title, read, singlePostPage }) {
  return (
    <article className={singlePostPage ? "" : "listing-body"}>
      <h6 className={read ? "secondary-item" : ""}>{title}</h6>
      <div>{parse(text)}</div>
    </article>
  );
}

export default PostBody;
