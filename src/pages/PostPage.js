import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../Components/Post/Post";
import Editor from "../Components/Post/Editor";
import Comment from "../Components/Post/Comment";
import { useUserContext } from "../context/userContext";
import { usePostContext } from "../context/postContext";

function PostPage() {
  const { userData, setUserData, handleReadPost, token } = useUserContext();
  const { handleSubmit, text, fetchPost, post, loading } = usePostContext();

  const { id } = useParams();

  useEffect(() => {
    if (token) {
      fetchPost(id);
      if (!userData.read_posts.includes(id)) {
        setUserData({
          ...userData,
          read_posts: [...userData.read_posts, id],
        });
        handleReadPost(id);
      }
    }
  }, [userData, token]);
  return loading ? (
    <div>loading</div>
  ) : (
    <div className="mt-3 pb-2 container bg-white">
      <div className="mt-2 px-3 pb-4">
        <Post {...post} singlePostPage={true} />
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
      {post.comments.length !== 0 && (
        <div id="Comments">
          <Comment commentsTree={post.comments} postId={id}></Comment>
        </div>
      )}
    </div>
  );
}

export default PostPage;
