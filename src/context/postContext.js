import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "./userContext";

const PostContext = React.createContext();
const { REACT_APP_BACKEND_URL } = process.env;
const BASE_URL = `${REACT_APP_BACKEND_URL}/api`;

const PostProvider = ({ children }) => {
  // input text
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [groupup, setGroupup] = useState("");
  const [groupups, setGroupups] = useState([]);

  const { userData } = useUserContext();

  const handleEditorChange = (e) => {
    setText(e.target.getContent());
    console.log(text);
  };
  const handleSubmit = (e, obj) => {
    e.preventDefault();
    if (obj.hasOwnProperty("id")) {
      fetch(`${BASE_URL}/p/${obj.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ id: obj.id, comment: text }),
      }).then((resp) => {
        console.log(resp);
        // if successful, display modal
      });
    } else if (obj.hasOwnProperty("commentId")) {
      fetch(`${BASE_URL}/c/${obj.commentId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ id: obj.commentId, comment: text }),
      }).then((resp) => {
        console.log(resp);
        // if successful, display modal
      });
    } else {
      fetch(`${BASE_URL}/g/${obj.groupup}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ title: obj.title, post: text }),
      }).then(async (resp) => {
        console.log(await resp.json());
        // if successful, display modal
      });
    }
  };

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
      },
      body: JSON.stringify({ readPost: id }),
    });
  };

  const fetchPosts = (endpoint) => {
    // fetch(`${BASE_URL}/${endpoint}`, {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //   },
    // }).then(async (resp) => {
    //   const data = await resp.json();
    //   setPosts(data.posts);
    //   setGroupup(data.groupup);
    // });
  };

  const fetchGroupups = (endpoint) => {
    fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then(async (resp) => {
      setGroupups(await resp.json());
    });
  };

  return (
    <PostContext.Provider
      value={{
        // isAuthenticated,
        // logIn,
        // logOut,
        // isLoading,
        // userData,
        // user,
        // setUserData,
        fetchPosts,
        fetchGroupups,
        handleSubmit,
        handleEditorChange,
        handlePut,
        handleReadPost,
        groupup,
        groupups,
        posts,
        text,
        setText,
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
