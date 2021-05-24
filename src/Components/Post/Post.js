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
  groupup_id,
  groupup_name,
  created,
  author,
  author_name,
  html_text,
  num_comments,
  singlePostPage,
}) {
  const { isAuthenticated, userData, handleUserVote } = useUserContext();
  const [vote, setVote] = useState(score);
  const [read, setRead] = useState(false);

  useEffect(() => {
    if (userData) {
      // check if user read
      if (userData.read_posts.includes(id)) setRead(true);
    }
  }, [isAuthenticated, userData, id]);

  const handleVote = (val) => {
    setVote(vote + val);
    handleUserVote(id, val);
  };

  return (
    <section className="mt-2 bg-white row rounded">
      <Col xs={1} className="bg-light">
        <Vote score={vote} handleVote={handleVote} id={id}></Vote>
      </Col>
      <Col className="d-flex flex-column">
        <PostHeading
          groupup={{ name: groupup_name, id: groupup_id }}
          created={created}
          author={{ id: author, name: author_name }}
        ></PostHeading>
        <Link to={`/post/${id}`} className="clickable">
          <PostBody
            text={html_text}
            title={title}
            read={read}
            singlePostPage={singlePostPage}
          />
        </Link>
        <PostFooter comments={num_comments}></PostFooter>
      </Col>
    </section>
  );
}

export default Post;
