import React, { useEffect, useState } from "react";
import Main from "../Components/Main/Main";
import Sidebar from "../Components/Main/Sidebar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useUserContext } from "../context/userContext";
import { usePostContext } from "../context/postContext";
import { useGroupupContext } from "../context/groupupContext";

function Groupup(props) {
  const { userData, token } = useUserContext();
  const { groupups, fetchGroupups, joinGroupup } = useGroupupContext();
  const { fetchPosts, posts, groupup, thumbnail } = usePostContext();
  const [showJoin, setShowJoin] = useState(props.match.params.id !== "");

  const handleJoinGroupup = () => {
    joinGroupup(props.match.params.id);
    setShowJoin(false);
  };

  useEffect(() => {
    if (token) {
      fetchPosts(`/g/${props.match.params.id}`);
      fetchGroupups("/g/user");
      if (userData && userData.groupups.includes(props.match.params.id)) {
        setShowJoin(false);
      }
    }
  }, [userData, token, groupup]);

  return (
    <Container fluid="lg">
      <Row className="mt-5">
        <Main
          posts={posts}
          showJoin={showJoin}
          joinGroupup={handleJoinGroupup}
        />
        <Sidebar groupup={groupup} groupups={groupups} thumbnail={thumbnail} />
      </Row>
    </Container>
  );
}

export default Groupup;
