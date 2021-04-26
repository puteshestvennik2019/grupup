import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Vote from "./Vote";
import PostHeading from "./PostHeading";
import PostFooter from "./PostFooter";
import PostBody from "./PostBody";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

function Post({
  id,
  score,
  title,
  subreddit,
  created,
  author,
  selftext,
  num_comments,
}) {
  const { isAuthenticated, userData, setUserData } = useUserContext();
  const [vote, setVote] = useState(score);
  const [userVote, setUserVote] = useState(0);
  const [read, setRead] = useState(false);

  useEffect(() => {
    if (userData) {
      // check if user voted
      if (userData.upvoted.includes(id)) setUserVote(1);
      else if (userData.downvoted.includes(id)) setUserVote(-1);
      // check if user read
      // if (userData.read.includes(id)) setRead(true);
    }
  }, [isAuthenticated, userData]);

  const handleRead = () => {
    if (!read) {
      setRead(true);

      // TODO: send to backend
      // const readArray = [...user.read, id];
      // setUser({ ...user, read: readArray });
    }
  };

  const handleVote = (val) => {
    setVote(vote + handleUserVote(val));
  };

  const handleUserVote = (val) => {
    if (val != userVote) {
      let upV = [];
      let downV = [];

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

      return val;
    } else return 0;
  };
  return (
    <section className="mt-2 bg-white row rounded">
      <Col xs={1} className="bg-light" onClick={handleRead}>
        <Vote score={vote} userVote={userVote} handleVote={handleVote}></Vote>
      </Col>
      <Col className="d-flex flex-column">
        <PostHeading
          subreddit={subreddit}
          created={created}
          author={author}
        ></PostHeading>
        <Link to={`/post/${id}`} className="clickable">
          <PostBody selftext={selftext} title={title} read={read} />
        </Link>
        <PostFooter comments={num_comments}></PostFooter>
      </Col>
    </section>
  );
}

export default Post;
