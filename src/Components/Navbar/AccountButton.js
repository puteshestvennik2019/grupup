import React from "react";
import { useUserContext } from "../../context/userContext";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";

const AccountButton = () => {
  const { isAuthenticated, logOut, user } = useUserContext();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="default" id="dropdown-basic">
        <img className="avatar pr-2" src={user.picture} alt="your avatar" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/u/1">Profile</Dropdown.Item>
        <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AccountButton;
