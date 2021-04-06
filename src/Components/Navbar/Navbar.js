import React from "react";
import { LoginButtons } from "./LoginButtons";
import { Logo } from "./Logo";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar" style={{ fontSize: "0.8rem" }}>
        <div className="container-fluid d-flex justify-content-between">
          <Logo />
          <Search />
          <LoginButtons />
        </div>
      </nav>
    </>
  );
};
