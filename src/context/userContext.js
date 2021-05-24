import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();

  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");

  const getToken = () => {
    getAccessTokenSilently().then((resp) => setToken(resp));
  };

  const logIn = async () => {
    loginWithRedirect();

    // loginWithPopup()
    // .then(() => {
    //   getAccessTokenSilently().then((accessToken) =>
    //     localStorage.setItem("token", JSON.stringify(accessToken))
    //   );
    // });

    // === for signup ===:
    // loginWithRedirect({
    //   screen_hint: 'signup'
    // })
  };

  const logOut = async () => {
    sessionStorage.removeItem("user");
    setUserData(null);
    logout();
  };

  const fetchUser = async () => {
    try {
      const token = await getAccessTokenSilently();
      const resp = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/u/${user.sub}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      const data = await resp.json();
      setUserData(data);
      sessionStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      const token = await getAccessTokenSilently();
      fetch(`${process.env.REACT_APP_BACKEND_URL}/u/${user.sub}`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      })
        .then(() => {
          console.log("Deleted user");
          logOut();
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  // userData: read posts
  const handleReadPost = async (id) => {
    try {
      const token = await getAccessTokenSilently();
      fetch(`${process.env.REACT_APP_BACKEND_URL}/u/read/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      // Response handling not requiered
    } catch (error) {
      console.log(error);
    }
  };

  // userData: votes
  const handleUserVote = async (id, val) => {
    console.log("inside handleUserVote");
    console.log(id, val);

    try {
      const token = await getAccessTokenSilently();
      fetch(`${process.env.REACT_APP_BACKEND_URL}/u/vote`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ voteVal: val, postId: id }),
      });
      // Response handling not requiered
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (!token) {
        getToken();
      }
      if (!userData) {
        if (!sessionStorage.getItem("user")) fetchUser();
        else {
          const sessionData = sessionStorage.getItem("user");
          setUserData(JSON.parse(sessionData));
        }
      } else sessionStorage.setItem("user", JSON.stringify(userData));
    }
  }, [isAuthenticated, userData, logIn]);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        logIn,
        logOut,
        deleteUser,
        isLoading,
        userData,
        user,
        setUserData,
        token,
        handleReadPost,
        handleUserVote,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
