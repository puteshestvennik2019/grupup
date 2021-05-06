import React, { useState, useEffect } from "react";
import Vote from "./Vote";
import timeElapsed from "../../utils/timeElapsed";
import Editor from "./Editor";
import { FaCommentAlt } from "react-icons/fa";
import { usePostContext } from "../../context/postContext";

function Comment({ comments }) {
  const { handleSubmit, text, setText, handlePut } = usePostContext();
  // the below states to be moved a level up to prevent openning multiple editors
  const [showEditor, setShowEditor] = useState(false);
  const [clickedReply, setClickedReply] = useState("");
  const [clickedEdit, setClickedEdit] = useState("");

  const handleEdit = (id, text) => {
    setClickedEdit(id);
    setText(text);
  };
  const handleCancel = () => {
    setClickedEdit("");
    setText("");
  };

  return (
    <div className="mb-3 pl-4 border-left">
      {comments.map((item) => {
        const { author, comment, score, id, created, comments } = item;
        const handleVote = () => {
          console.log("Handle comment voting");
        };
        return (
          <React.Fragment key={id}>
            {clickedEdit !== id ? (
              <>
                <div>
                  <a className="pr-1" href="#">
                    {author}
                  </a>
                  <span className="pl-1 secondary-item">
                    {timeElapsed(created)} ago
                  </span>
                </div>
                <p className="mb-1">{comment}</p>
                <div className="d-flex align-items-center">
                  <Vote
                    score={score}
                    small={true}
                    id={id}
                    handleVote={handleVote}
                  />
                  <span
                    className="ml-2 icon-btn-default"
                    onClick={() => {
                      handleEdit(id, comment);
                    }}
                  >
                    <FaCommentAlt className="mr-1"></FaCommentAlt>
                    Edit
                  </span>
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
                    <button
                      className="my-2 float-right btn btn-outline-dark font-weight-bold"
                      // if state is '', no comment has been written
                      disabled={!text}
                      onClick={(e) => handleSubmit(e, { commentId: id })}
                    >
                      Comment
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="col-9">
                <Editor initialValue={comment} />
                <div className="d-flex justify-content-end my-3">
                  <button
                    className="btn btn-outline-dark font-weight-bold"
                    onClick={() => handleCancel()}
                  >
                    Cancel
                  </button>
                  <button
                    className="ml-2 btn btn-outline-dark font-weight-bold"
                    onClick={(e) => handlePut(e, { commentId: id })}
                  >
                    Save edits
                  </button>
                </div>
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
