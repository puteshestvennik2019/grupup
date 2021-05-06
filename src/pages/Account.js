import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <Link to={"/"}>
        <button className="btn">Home</button>
      </Link>
      <Link to={"/"}>
        <button className="btn">Delete account</button>
      </Link>
    </div>
  );
}

export default Account;
