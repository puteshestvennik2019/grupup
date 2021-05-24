import React, { useState } from "react";
import Vote from "./Vote";
import timeElapsed from "../../utils/timeElapsed";
import Editor from "./Editor";
import { FaCommentAlt } from "react-icons/fa";
import { usePostContext } from "../../context/postContext";
import parse from "html-react-parser";

function Comment({ commentsTree, postId }) {
  const { handleSubmit, text, setText, handlePut, comments } = usePostContext();

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
      {commentsTree.map((item) => {
        const { id, childComments } = item;

        // inner loop
        const comment = comments.find((comment) => comment.id === id);

        const handleVote = () => {
          console.log("Handle comment voting");
        };
        return (
          <React.Fragment key={id}>
            {clickedEdit !== id ? (
              <>
                <div>
                  <span className="pr-1">{comment.author_name}</span>
                  <span className="pl-1 secondary-item">
                    {timeElapsed(comment.created)} ago
                  </span>
                </div>
                <div className="mb-1">{parse(comment.html_text)}</div>
                <div className="d-flex align-items-center">
                  <Vote
                    score={0}
                    small={true}
                    id={id}
                    handleVote={handleVote}
                  />
                  <span
                    className="ml-2 icon-btn-default"
                    onClick={() => {
                      handleEdit(id, comment.html_text);
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
                      onClick={(e) =>
                        handleSubmit(e, { parentId: id, postId: postId })
                      }
                    >
                      Comment
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="col-9">
                <Editor initialValue={comment.html_text} />
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
            {childComments && (
              <Comment commentsTree={childComments} postId={postId} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Comment;
