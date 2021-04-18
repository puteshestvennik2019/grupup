import React from "react";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

function Vote({ score, handleVote }) {
  return (
    <div className="d-flex flex-column align-items-center pt-2">
      <span className="p-1 icon-btn-default" onClick={() => handleVote(1)}>
        <ImArrowUp />
      </span>
      <span className="font-weight-bold">{score || "Vote"}</span>
      <span className="p-1 icon-btn-default" onClick={() => handleVote(-1)}>
        <ImArrowDown />
      </span>
    </div>
  );
}

export default Vote;
