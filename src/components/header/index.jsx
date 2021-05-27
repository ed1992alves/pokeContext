import React from "react";
import { Link } from "react-router-dom";
import "./styles.less";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/search">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
