import React from "react";
import { FaCommentAlt } from "react-icons/fa";

function PostFooter({ comments }) {
  return (
    <div className="my-1">
      <span className="p-1 icon-btn-default">
        <FaCommentAlt />
        <span className="px-1">{comments}</span>
        <span>{parseInt(comments) === 1 ? "Comment" : "Comments"}</span>
      </span>
    </div>
  );
}

export default PostFooter;
