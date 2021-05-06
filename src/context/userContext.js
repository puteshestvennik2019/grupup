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
  const [loading, setLoading] = useState(false);
  //   const [vote, setVote] = useState(score);
  //   const [userVote, setUserVote] = useState(0);
  //   const [read, setRead] = useState(false);

  const logIn = () => {
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

  const logOut = () => {
    sessionStorage.removeItem("user");
    setUserData(null);
    logout();
  };

  const fetchUser = async () => {
    try {
      const resp = await fetch("http://localhost:3001");
      const data = await resp.json();
      setUserData(data);
      sessionStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      if (!userData) {
        if (!sessionStorage.getItem("user")) fetchUser();
        else {
          const sessionData = sessionStorage.getItem("user");
          setUserData(JSON.parse(sessionData));
        }
      } else sessionStorage.setItem("user", JSON.stringify(userData));
    }

    // check if user voted
    //   if (user.upvoted.includes(id)) setUserVote(1);
    //   else if (user.downvoted.includes(id)) setUserVote(-1);

    // check if user read
    //   if (!read && user.read.includes(id)) setRead(true);
  }, [isAuthenticated, userData]);
  // const userRead = (id) => {
  //   if (!read) {
  //     setRead(true);

  //     // TODO: send to backend
  //     const readArray = [...user.read, id];
  //     setUser({ ...user, read: readArray });
  //   }
  // };

  //   const handleUserVote = (val) => {
  //     if (val != userVote) {
  //         let upV = [];
  //         let downV = [];
  //         if (userVote === 0) {
  //             if (val === 1) upV = [...user.upvoted, ]
  //         }
  //         setUserVote(userVote + val);
  //     }
  //   };
  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        logIn,
        logOut,
        isLoading,
        userData,
        user,
        setUserData,
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
