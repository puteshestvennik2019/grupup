import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";

function Account() {
  const { deleteUser } = useUserContext();
  return (
    <div>
      <Link to={"/"}>
        <button className="btn">Home</button>
      </Link>
      <Link to={"/"}>
        <button className="btn" onClick={deleteUser}>
          Delete account
        </button>
      </Link>
    </div>
  );
}

export default Account;
