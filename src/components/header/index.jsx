import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/search">Search</Link>
        </div>
    );
}

export default Header;