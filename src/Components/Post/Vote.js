import React, { useEffect, useState } from "react";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { useUserContext } from "../../context/userContext";

function Vote({ score, handleVote, small, id }) {
  const { userData, setUserData } = useUserContext();
  const [userVote, setUserVote] = useState(0);

  const handleUserVote = (val) => {
    if (val !== userVote) {
      fetch(`http://localhost:3001/api/vote/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ vote: val }),
      }).then((resp) => {
        console.log(resp);
      });

      let upV = userData.upvoted;
      let downV = userData.downvoted;

      if (userVote === 0) {
        if (val === 1) upV = [...userData.upvoted, id];
        else downV = [...userData.downvoted, id];
      } else {
        if (val === -1) {
          upV = userData.upvoted.filter((post) => post !== id);
        } else downV = userData.downvoted.filter((post) => post !== id);
      }

      setUserData({ ...userData, upvoted: upV, downvoted: downV });
      setUserVote(userVote + val);

      handleVote(val);
    }
  };

  useEffect(() => {
    if (userData) {
      // check if user voted
      if (userData.upvoted.includes(id)) setUserVote(1);
      else if (userData.downvoted.includes(id)) setUserVote(-1);
    }
  }, []);

  return (
    <div
      className={`d-flex align-items-center ${
        small || "flex-column align-items-center pt-2"
      }`}
    >
      <span
        className={`p-1 icon-btn-default`}
        onClick={() => handleUserVote(1)}
      >
        <ImArrowUp className={userVote === 1 && "upvoted"} />
      </span>
      <span
        className={`font-weight-bold ${
          userVote === 1 ? "upvoted" : userVote === -1 ? "downvoted" : ""
        }`}
      >
        {score || "Vote"}
      </span>
      <span className="p-1 icon-btn-default" onClick={() => handleUserVote(-1)}>
        <ImArrowDown className={userVote === -1 && "downvoted"} />
      </span>
    </div>
  );
}

export default Vote;
