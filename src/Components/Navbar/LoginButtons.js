import React from "react";
import Button from "react-bootstrap/Button";

export const LoginButtons = () => {
  return (
    <div id="navbarContent" className="justify-content-end">
      <Button
        className="font-weight-bold text-uppercase"
        variant="outline-dark"
        style={{
          fontSize: "0.8rem",
        }}
      >
        Log in
      </Button>
      <Button
        className="ml-2 font-weight-bold text-uppercase"
        variant="default"
        style={{ background: "#fd2d01", color: "white", fontSize: "0.8rem" }}
      >
        Sign up
      </Button>
    </div>
  );
};
