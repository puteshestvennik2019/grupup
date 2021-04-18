import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Vote from "./Vote";
import PostHeading from "./PostHeading";
import PostFooter from "./PostFooter";
import PostBody from "./PostBody";
import { Link } from "react-router-dom";

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
  const [vote, setVote] = useState(score);
  const handleClick = (id) => {
    console.log(id);
  };

  const handleVote = (val) => {
    setVote(vote + val);
  };
  return (
    <section className="mt-2 bg-white row rounded">
      <Col xs={1} className="bg-light">
        <Vote score={vote} handleVote={handleVote}></Vote>
      </Col>
      <Col className="d-flex flex-column">
        <PostHeading
          subreddit={subreddit}
          created={created}
          author={author}
        ></PostHeading>
        <Link to={`/post/${id}`} className="clickable">
          <PostBody selftext={selftext} title={title} />
        </Link>
        <PostFooter comments={num_comments}></PostFooter>
      </Col>
    </section>
  );
}

export default Post;
