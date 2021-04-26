import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Components/Post/Post";
import Editor from "../Components/Post/Editor";
import Comment from "../Components/Post/Comment";
import postData from "../data/post";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(postData);
  const [text, setText] = useState("");
  const handleEditorChange = (e) => {
    setText(e.target.getContent());
  };
  return (
    <div className="mt-3 pb-2 container bg-white">
      <div className="mt-2 px-3 pb-4">
        <Post {...post} />
      </div>
      <div className="mx-auto col-lg-8 mb-5">
        <Editor handleEditorChange={handleEditorChange} />
        <button
          disabled={!text}
          className="my-2 float-right btn btn-outline-dark font-weight-bold"
        >
          Comment
        </button>
      </div>
      {post.comments.length && (
        <div id="Comments">
          <Comment comments={post.comments}></Comment>
        </div>
      )}
    </div>
  );
}

export default PostPage;
