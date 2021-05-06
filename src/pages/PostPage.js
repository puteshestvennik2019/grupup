import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../Components/Post/Post";
import Editor from "../Components/Post/Editor";
import Comment from "../Components/Post/Comment";
import postData from "../data/post";
import { useUserContext } from "../context/userContext";
import { usePostContext } from "../context/postContext";

function PostPage() {
  const { userData, setUserData, handleReadPost } = useUserContext();
  const { handleSubmit, text } = usePostContext();
  const { id } = useParams();
  const [post, setPost] = useState(postData);
  useEffect(() => {
    if (userData && !userData.readPosts.includes(id)) {
      setUserData({ ...userData, readPosts: [...userData.readPosts, id] });
      handleReadPost(id);
    }
  }, []);
  return (
    <div className="mt-3 pb-2 container bg-white">
      <div className="mt-2 px-3 pb-4">
        <Post {...post} />
      </div>
      <div className="mx-auto col-lg-8 mb-5">
        <Editor />
        <button
          disabled={!text}
          onClick={(e) => handleSubmit(e, { id: id })}
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
