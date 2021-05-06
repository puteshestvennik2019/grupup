import React, { useState, useContext, useEffect } from "react";
import { useUserContext } from "./userContext";

const GroupupContext = React.createContext();
const { REACT_APP_BACKEND_URL } = process.env;
const BASE_URL = `${REACT_APP_BACKEND_URL}/api`;

const GroupupProvider = ({ children }) => {
  const groupupObj = {
    name: "",
    description: "",
  };
  const [newGroupup, setNewGroupup] = useState(groupupObj);
  const [groupups, setGroupups] = useState([]);

  const { userData } = useUserContext();

  const fetchGroupups = (endpoint) => {
    fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then(async (resp) => {
      setGroupups(await resp.json());
    });
  };

  const createGroupup = () => {
    fetch(`${BASE_URL}/g`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ newGroupup }),
    }).then((resp) => {
      console.log(resp);
      // if successful, display modal
    });
  };

  return (
    <GroupupContext.Provider
      value={{
        // isAuthenticated,
        // logIn,
        // logOut,
        // isLoading,
        // userData,
        // user,
        // setUserData,
        createGroupup,
        fetchGroupups,
        setNewGroupup,
        groupups,
      }}
    >
      {children}
    </GroupupContext.Provider>
  );
};

export const useGroupupContext = () => {
  return useContext(GroupupContext);
};

export { GroupupContext, GroupupProvider };
