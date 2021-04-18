import React from "react";

function PostHeading({ subreddit, created, author }) {
  const timeElapsed = (since) => {
    const now = Math.floor(Date.now() / 1000);
    const seconds = now - since;
    let interval = Math.floor(seconds / 31536000);

    if (interval > 0) {
      return `${interval} years`;
    }
    interval = Math.floor(seconds / 2592000);

    if (interval > 0) {
      return `${interval} months`;
    }
    interval = Math.floor(seconds / 86400);

    if (interval > 0) {
      return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);

    if (interval > 0) {
      return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);

    if (interval > 0) {
      return `${interval} minutes`;
    }

    return `${seconds} seconds`;
  };
  return (
    <div className="my-1 p-1">
      <a href="#" className="font-weight-bold">
        {subreddit}
      </a>
      <span className="px-1 secondary-item">- Posted by</span>
      <a className="pr-1 secondary-item" href="#">
        {author}
      </a>
      <span className=" pl-1 secondary-item">{timeElapsed(created)} ago</span>
    </div>
  );
}

export default PostHeading;
