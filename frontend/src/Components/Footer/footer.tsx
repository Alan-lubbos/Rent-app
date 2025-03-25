import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.css";
import logo from "../../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      {/* First Section */}
      <div className="footer-container">
        <div className="footer-text">
          <h2>Do You Have Questions?</h2>
          <p>We’ll help you to grow your career and growth.</p>
        </div>
        <button className="btn5">Contact Us Today</button>
      </div>

      {/* Second Section */}
      <div className="footer-bottom">
        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Banner" className="footer-banner" />
          <h2 className="footer-title">Do You Need Help With Anything?</h2>
          <p className="footer-description">
            Receive updates, hot deals, tutorials, discounts sent straight in your inbox every month
          </p>
          <div className="footer-subscribe">
            <Box
              component="form"
              sx={{ "& > :not(style)": { width: "300px" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="email-input"
                label="Email Address"
                variant="outlined"
                InputProps={{
                  style: { backgroundColor: "white", color: "black" },
                }}
                fullWidth
              />
            </Box>
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        {/* Right Sections */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>LAYOUTS</h3>
            <p>Home Page</p>
            <p>About Page</p>
            <p>Service Page</p>
            <p>Property Page</p>
            <p>Contact Page</p>
            <p>Single Blog</p>
          </div>
          <div className="footer-column">
            <h3>ALL SECTIONS</h3>
            <p>Headers</p>
            <p>Features</p>
            <p>Attractive</p>
            <p>Testimonials</p>
            <p>Videos</p>
            <p>Footers</p>
          </div>
          <div className="footer-column">
            <h3>COMPANY</h3>
            <p>About</p>
            <p>Blog</p>
            <p>Pricing</p>
            <p>Affiliate</p>
            <p>Login</p>
            <p>Changelog</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;