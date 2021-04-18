import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Post from "../Post/Post";
import data from "../../data";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Col lg={8}>
      <Row className="d-flex justify-content-end">
        <Link to="/submit">
          <button className="btn btn-outline-dark font-weight-bold">
            Post something
          </button>
        </Link>
      </Row>
      <main className="mt-3">
        {data.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </main>
    </Col>
  );
}

export default Main;
