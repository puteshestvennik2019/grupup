import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Post from "../Post/Post";
import data from "../../data/data";
import { Link } from "react-router-dom";

function Main({ showJoin, joinGroupup, posts }) {
  return (
    <Col lg={8}>
      <Row className="d-flex justify-content-end">
        {!showJoin ? (
          <Link to="/submit">
            <button className="btn btn-outline-dark font-weight-bold">
              Post something
            </button>
          </Link>
        ) : (
          <button
            className="btn btn-outline-dark font-weight-bold"
            onClick={joinGroupup}
          >
            Join groupUp
          </button>
        )}
      </Row>
      <main className="mt-3">
        {posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </main>
    </Col>
  );
}

export default Main;
