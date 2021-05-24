import React from "react";
import Button from "react-bootstrap/Button";
import AccountButton from "./AccountButton";
import { useUserContext } from "../../context/userContext";

export const LoginButtons = () => {
  const { isAuthenticated, logIn } = useUserContext();

  // const [popupState, setPopupState] = useState(false);
  // const [loginState, setLoginState] = useState(false);

  return (
    <div id="navbarContent" className="justify-content-end">
      {!isAuthenticated ? (
        <Button
          onClick={logIn}
          id="login"
          className="font-weight-bold text-uppercase"
          variant="outline-dark"
        >
          Log in
        </Button>
      ) : (
        <>
          {/* <Button
            onClick={() => logOut({ returnTo: window.location.origin })}
            id="logout"
            className="ml-2 font-weight-bold text-uppercase"
            variant="red"
          >
            Log out
          </Button> */}
          <AccountButton />
        </>
      )}

      {/* <LoginModal
        login={loginState}
        show={popupState}
        setShow={setPopupState}
      /> */}
    </div>
  );
};
