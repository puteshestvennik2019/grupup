import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import index.css sedond to override bootstrap values
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/userContext";
import { PostProvider } from "./context/postContext";
import { GroupupProvider } from "./context/groupupContext";

const { REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUTH0_DOMAIN } = process.env;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN}
      clientId={REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
      audience="https://groupup/api"
    >
      <UserProvider>
        <GroupupProvider>
          <PostProvider>
            <App />
          </PostProvider>
        </GroupupProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
