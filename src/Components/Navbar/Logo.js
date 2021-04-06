import React, { useState, useEffect } from "react";
import logoBrand from "../../Assets/Logos/icon-left-font.png";
import logo from "../../Assets/Logos/icon.png";

export const Logo = () => {
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
    <a href="/home" className="navbar-brand">
      <img
        src={width > 750 ? logoBrand : logo}
        alt="Groupomania logo"
        height="50px"
      />
    </a>
  );
};
