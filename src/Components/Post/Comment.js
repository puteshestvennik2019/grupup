import React, { useState } from "react";
import Vote from "./Vote";
import timeElapsed from "../../utils/timeElapsed";
import { Editor } from "@tinymce/tinymce-react";
import { FaCommentAlt } from "react-icons/fa";

function Comment({ comments }) {
  const [showEditor, setShowEditor] = useState(false);
  const [clickedReply, setClickedReply] = useState("");
  return (
    <div className="mb-3 pl-4 border-left">
      {comments.map((comment) => {
        const { author, text, score, id, created, comments } = comment;
        return (
          <React.Fragment key={id}>
            <div>
              <a className="pr-1" href="#">
                {author}
              </a>
              <span className="pl-1 secondary-item">
                {timeElapsed(created)} ago
              </span>
            </div>
            <p className="mb-1">{text}</p>
            <div className="d-flex align-items-center">
              <Vote score={score} small={true} />
              <span
                className="ml-2 icon-btn-default"
                onClick={() => {
                  setShowEditor(!showEditor);
                  setClickedReply(id);
                }}
              >
                <FaCommentAlt className="mr-1"></FaCommentAlt>
                Reply
              </span>
            </div>
            {showEditor && clickedReply === id && (
              <div>
                <Editor />
                <button className="my-2 float-right btn btn-outline-dark font-weight-bold">
                  Comment
                </button>
              </div>
            )}
            {comments && <Comment comments={comments} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Comment;
