import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Groupup from "./pages/Groupup";
import PostPage from "./pages/PostPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WritePost from "./pages/WritePost";
import Wrapper from "./pages/Wrapper";
import AllGroupups from "./pages/AllGroupups";

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
            <PostPage />
          </Route>
          <Route path="/g/:id" component={Groupup} />
          <Route path="/g/" component={AllGroupups} />
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
