import React from "react";
import Main from "../Components/Main/Main";
import Sidebar from "../Components/Main/Sidebar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const Landing = () => {
  return (
    <Container fluid="lg">
      <Row className="mt-5">
        <Main />
        <Sidebar />
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(Landing, {
  onRedirecting: () => <div>Loading...</div>,
});
