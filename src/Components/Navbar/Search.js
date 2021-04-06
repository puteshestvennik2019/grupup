import React, { useState, useEffect } from "react";
import searchIcon from "../../Assets/Icons/searchIcon.png";

import "./Search.css";

export const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <form class="d-flex searchbar" action={{ handleSubmit }}>
      <label htmlFor="searchInput" className="d-flex align-items-center">
        <img
          src={searchIcon}
          height="20px"
          className="position-absolute pl-1 mt-2"
        />
      </label>
      {width > 400 && (
        <input
          id="searchInput"
          class="form-control"
          type="search"
          placeholder="Search for posts..."
          aria-label="Search"
          style={{
            fontSize: "0.8rem",
            maxWidth: "600px",
            paddingLeft: "25px",
          }}
        />
      )}
    </form>
  );
};
