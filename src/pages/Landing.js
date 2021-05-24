import React, { useEffect } from "react";
import Main from "../Components/Main/Main";
import Sidebar from "../Components/Main/Sidebar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useUserContext } from "../context/userContext";
import { useGroupupContext } from "../context/groupupContext";
import { usePostContext } from "../context/postContext";

const Landing = () => {
  const { token } = useUserContext();
  const { groupups, fetchGroupups } = useGroupupContext();
  const { fetchPosts, posts } = usePostContext();

  useEffect(() => {
    // fetch groupups this user is subscribed to
    if (token) {
      fetchGroupups("/g/user");
      fetchPosts("");
    }
  }, [token]);
  return (
    <Container fluid="lg">
      <Row className="mt-5">
        <Main posts={posts} />
        <Sidebar groupups={groupups} />
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(Landing, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
