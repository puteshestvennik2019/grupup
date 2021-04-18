import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LoginModal from "./LoginModal";

export const LoginButtons = () => {
  const [popupState, setPopupState] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const handleClick = (e) => {
    setPopupState(true);
    setLoginState(e.target.id === "login");
  };
  return (
    <div id="navbarContent" className="justify-content-end">
      <Button
        onClick={handleClick}
        id="login"
        className="font-weight-bold text-uppercase"
        variant="outline-dark"
      >
        Log in
      </Button>
      <Button
        onClick={handleClick}
        id="signup"
        className="ml-2 font-weight-bold text-uppercase"
        variant="red"
      >
        Sign up
      </Button>

      <LoginModal
        login={loginState}
        show={popupState}
        setShow={setPopupState}
      />
    </div>
  );
};
