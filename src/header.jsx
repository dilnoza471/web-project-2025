import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/">Coffee Shop</a>
        <nav className="nav-links">
          <a href="#">About Us</a>
          <a href="#reserve">Reserve</a>
          <a href="#contact">Contact</a>
          <Link to="/SignUp">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
