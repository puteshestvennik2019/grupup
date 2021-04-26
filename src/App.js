import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Groupup from "./pages/Groupup";
import Post from "./pages/PostPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WritePost from "./pages/WritePost";
import PrivateRoute from "./pages/PrivateRoute";
import Wrapper from "./pages/Wrapper";

export default function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar style={{ height: "60px" }} />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/g/:id">
            <Groupup />
          </Route>
          <Route path="/u/:user">
            <Account />
          </Route>
          <Route path="/submit">
            <WritePost />
          </Route>
          <Route path="*">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}
