import React, { useState, useContext } from "react";
import { useUserContext } from "./userContext";

const GroupupContext = React.createContext();
const { REACT_APP_BACKEND_URL } = process.env;
const BASE_URL = `${REACT_APP_BACKEND_URL}/api`;

const GroupupProvider = ({ children }) => {
  const groupupObj = {
    name: "",
    description: "",
    thumbnail: "",
  };
  const [newGroupup, setNewGroupup] = useState(groupupObj);
  const [groupups, setGroupups] = useState([]);

  const { token, userData, setUserData } = useUserContext();

  const fetchGroupups = (endpoint) => {
    fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
    }).then(async (resp) => {
      setGroupups(await resp.json());
    });
  };

  const createGroupup = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("thumbnail", newGroupup.thumbnail);
    data.append("name", newGroupup.name);
    data.append("description", newGroupup.description);
    console.log(token);

    fetch(`${BASE_URL}/g`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((resp) => {
        console.log(resp);
        setNewGroupup(groupupObj);
      })
      .catch((err) => console.log(err));
  };

  const joinGroupup = (id) => {
    console.log("joining groupup" + id);
    fetch(`${BASE_URL}/g/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: id }),
    })
      .then((resp) => {
        console.log(resp);
        const newGroupups = [...userData.groupups, id];
        setUserData({ ...userData, groupups: newGroupups });
      })
      .catch((err) => console.log(err));
  };

  return (
    <GroupupContext.Provider
      value={{
        createGroupup,
        fetchGroupups,
        setNewGroupup,
        newGroupup,
        groupups,
        joinGroupup,
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
