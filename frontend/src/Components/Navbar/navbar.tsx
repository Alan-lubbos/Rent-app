import React from "react";
import { Link } from "react-router-dom";  
import "./style.css";
import logo from "../../assets/images/logo.png";
import LoginIcon from "@mui/icons-material/Login";
import { ROUTES } from "../../Utils/constants";  

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      <ul className="navbar-links">
        <li><Link to={ROUTES.HOME} className="navbar-link">Home</Link></li>  
        <li><Link to={ROUTES.ABOUT} className="navbar-link">About</Link></li>  
        <li><Link to={ROUTES.SERVICES} className="navbar-link">Services</Link></li>  
        <li><Link to={ROUTES.BLOG} className="navbar-link">Blog</Link></li>  
        <li><Link to={ROUTES.PRICING} className="navbar-link">Pricing</Link></li>  
        <li><Link to={ROUTES.CONTACT} className="navbar-link">Contact</Link></li>  
      </ul>

     
      <div className="navbar-right">
        
        <div className="my-list-container">
          <span className="circle-number">2</span>
          <span className="my-list-text">My List</span>
        </div>
  
        <button className="signin-btn">
          <LoginIcon className="signin-icon" />
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
