import React from "react";
import timeElapsed from "../../utils/timeElapsed";

function PostHeading({ groupup, created, author }) {
  return (
    <div className="my-1 p-1">
      <a href="#" className="font-weight-bold">
        {groupup.name}
      </a>
      <span className="px-1 secondary-item">- Posted by</span>
      <a className="pr-1 secondary-item" href="#">
        {author.name}
      </a>
      <span className=" pl-1 secondary-item">{timeElapsed(created)} ago</span>
    </div>
  );
}

export default PostHeading;
