import React from "react";
import Main from "../Components/Main/Main";
import Sidebar from "../Components/Main/Sidebar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const Landing = () => {
  return (
    <Container fluid="lg">
      <Row className="mt-5">
        <Main />
        <Sidebar />
      </Row>
    </Container>
  );
};
