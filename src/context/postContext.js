import React, { useState, useContext } from "react";
import { useUserContext } from "./userContext";

const PostContext = React.createContext();
const { REACT_APP_BACKEND_URL } = process.env;
const BASE_URL = `${REACT_APP_BACKEND_URL}/api`;

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [groupup, setGroupup] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(true);

  // input text for Editor
  const [text, setText] = useState("");

  const { token } = useUserContext();

  const handleEditorChange = (e) => {
    setText(e.target.getContent());
  };

  /* Handles 3 types, based on arguments passed:
  // - id:              Comment to post with id
  // - commentId:       Reply to comment with id = commentId
  // - groupup, title:  A new post in groupup id = groupup 
  */
  const handleSubmit = (e, obj) => {
    e.preventDefault();

    // New comment
    if (obj.hasOwnProperty("id")) {
      fetch(`${BASE_URL}/p/${obj.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ postId: obj.id, html_text: text }),
      }).then((resp) => {
        console.log(resp);
        // if successful, display modal
      });
    }

    // New reply to a comment
    else if (obj.hasOwnProperty("parentId")) {
      console.log("logging an attempt to reply", obj.parentId, obj.postId);
      fetch(`${BASE_URL}/c/${obj.parentId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          parentId: obj.parentId,
          html_text: text,
          postId: obj.postId,
        }),
      }).then((resp) => {
        console.log(resp);
        // if successful, display modal
      });
    }

    // New post
    else {
      fetch(`${BASE_URL}/g/${obj.groupup}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: obj.title, html_text: text }),
      }).then(async (resp) => {
        console.log(await resp.json());
        // if successful, display modal
      });
    }
  };

  // *******************************************************
  // post and comment editing - not yet enabled
  // *******************************************************
  const handlePut = (e, obj) => {
    e.preventDefault();
    console.log(obj, text);
  };

  const handleReadPost = (id) => {
    fetch(`${BASE_URL}/read/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ read_post: id }),
    });
  };

  /* Fetch posts:
  // - from all user's communities (endpoint = '', i.e.: Landing page)
  // - from a particular community only (additionally, fetch info about the community) 
  */
  const fetchPosts = (endpoint) => {
    fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
    }).then(async (resp) => {
      const data = await resp.json();
      setPosts(data.posts);

      // if fetching posts from a signle groupup
      if (endpoint !== "") {
        setGroupup(data.groupup);
        if (groupup) {
          const base64 = new Buffer.from(groupup.thumbnail.data).toString(
            "base64"
          );
          setThumbnail("data:image;base64," + base64);
        }
      }
    });
  };

  const fetchPost = (id) => {
    setLoading(true);
    fetch(`${BASE_URL}/p/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setPost(data.post);
        setComments(data.comments);
        setLoading(false);
      });
    });
  };

  return (
    <PostContext.Provider
      value={{
        thumbnail,
        fetchPosts,
        fetchPost,
        handleSubmit,
        handleEditorChange,
        handlePut,
        handleReadPost,
        groupup,
        posts,
        post,
        comments,
        text,
        setText,
        loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};

export { PostContext, PostProvider };
