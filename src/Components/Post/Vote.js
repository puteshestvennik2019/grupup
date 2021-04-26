import React from "react";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

function Vote({ score, userVote, handleVote, small }) {
  return (
    <div
      className={`d-flex align-items-center ${
        small || "flex-column align-items-center pt-2"
      }`}
    >
      <span className={`p-1 icon-btn-default`} onClick={() => handleVote(1)}>
        <ImArrowUp className={userVote === 1 && "upvoted"} />
      </span>
      <span
        className={`font-weight-bold ${
          userVote === 1 ? "upvoted" : userVote === -1 ? "downvoted" : ""
        }`}
      >
        {score || "Vote"}
      </span>
      <span className="p-1 icon-btn-default" onClick={() => handleVote(-1)}>
        <ImArrowDown className={userVote === -1 && "downvoted"} />
      </span>
    </div>
  );
}

export default Vote;
