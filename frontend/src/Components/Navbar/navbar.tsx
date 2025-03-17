import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ROUTES } from "../../Utils/constants";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.ABOUT}>About</Link></li>
        <li><Link to={ROUTES.SERVICES}>Services</Link></li>
        <li><Link to={ROUTES.BLOG}>Blog</Link></li>
        <li><Link to={ROUTES.PRICING}>Pricing</Link></li>
        <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
