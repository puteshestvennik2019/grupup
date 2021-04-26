export default (since) => {
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
