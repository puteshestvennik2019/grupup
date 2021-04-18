import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState();
  return (
    <div>
      <h1>post</h1>
    </div>
  );
}

export default Post;
