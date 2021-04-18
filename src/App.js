import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Landing } from "./Pages/Landing";
import Account from "./Pages/Account";
import Groupup from "./Pages/Groupup";
import Post from "./Pages/Post";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WritePost from "./Pages/WritePost";
export default function App() {
  return (
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
  );
}
