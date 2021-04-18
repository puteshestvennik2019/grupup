import Button from "react-bootstrap/Button";
import "./ButtonRed.css";
import React from "react";

function ButtonRed({ text }) {
  return (
    <Button variant="red" className="font-weight-bold">
      {text}
    </Button>
  );
}

export default ButtonRed;
