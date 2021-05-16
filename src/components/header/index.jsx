import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/search">Search</Link>
      </div>
    </header>
  );
};

export default Header;
