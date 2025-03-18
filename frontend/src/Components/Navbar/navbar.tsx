import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";
import LoginIcon from "@mui/icons-material/Login";


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="navbar-logo" />

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>

      {/* Right Section (My List + Sign In Button) */}
      <div className="navbar-right">
        {/* Green Circular Number Indicator */}
        <div className="my-list-container">
          <span className="circle-number">2</span>
          <span className="my-list-text">My List</span>
        </div>

        {/* Sign In Button */}
        <button className="signin-btn">
          <LoginIcon className="signin-icon" />
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
