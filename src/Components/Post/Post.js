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
  const { isAuthenticated, userData } = useUserContext();
  const [vote, setVote] = useState(score);
  const [read, setRead] = useState(false);

  useEffect(() => {
    if (userData) {
      // check if user read
      if (userData.readPosts.includes(id)) setRead(true);
    }
  }, [isAuthenticated, userData]);

  const handleRead = () => {
    // if (!read) {
    //   setRead(true);
    // TODO: send to backend
    // const readArray = [...user.read, id];
    // setUser({ ...user, read: readArray });
    // }
  };

  const handleVote = (val) => setVote(vote + val);

  return (
    <section className="mt-2 bg-white row rounded">
      <Col xs={1} className="bg-light">
        <Vote score={vote} handleVote={handleVote} id={id}></Vote>
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
