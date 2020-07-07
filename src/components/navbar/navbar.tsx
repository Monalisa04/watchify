import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="app-header-fixed box-shadow">
      <span className="navbar-brand logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </span>
    </div>
  );
};

export default Navbar;
