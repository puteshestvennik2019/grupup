import React, { useEffect, useState } from "react";
import Main from "../Components/Main/Main";
import Sidebar from "../Components/Main/Sidebar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useUserContext } from "../context/userContext";
import { usePostContext } from "../context/postContext";
import { useGroupupContext } from "../context/groupupContext";

function Groupup(props) {
  console.log(props);
  const { userData } = useUserContext();
  const { groupups, fetchGroupups } = useGroupupContext();
  const { fetchPosts, posts, groupup } = usePostContext();
  const [isMember, setIsMemeber] = useState(false);
  const data = {
    Name: "Community name",
    Created: "Long time ago",
  };

  useEffect(() => {
    fetchPosts(`/g/${props.match.params.id}`);
    fetchGroupups("/g/user");
    if (userData && userData.groupups.includes(props.match.params.id)) {
      setIsMemeber(true);
    }
  }, [userData]);

  return (
    <Container fluid="lg">
      <Row className="mt-5">
        <Main posts={posts} isMember />
        <Sidebar groupup={groupup} groupups={groupups} />
      </Row>
    </Container>
  );
}

export default Groupup;
