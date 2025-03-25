import React from "react";
import "./style.css"; 
import banner from "../../../assets/images/banner.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const Banner: React.FC = () => {
  return (
    <div className="banner-section">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>Search Your Next Home</h1>
          <p>Find new & featured property located in your local city.</p>
        </div>

        <div className="search-container">
          <div className="input-group">
            <label>City/Street</label>
            <TextField
              variant="outlined"
              fullWidth
              className="search-input"
              placeholder="Enter city or street"
            />
          </div>
          <div className="divider"></div>

          <div className="input-group">
            <label>Property Type</label>
            <TextField
              variant="outlined"
              fullWidth
              className="search-input"
              placeholder="Enter property type"
            />
          </div>
          <div className="divider"></div>

          <div className="input-group">
            <label>Price Range</label>
            <TextField
              variant="outlined"
              fullWidth
              className="search-input"
              placeholder="Enter price range"
            />
          </div>
          <div className="divider"></div>

          <div className="bottom-section">
            <span className="advanced-filters">Advanced Filters</span>
            <Button className="search-button" variant="contained">
              <SearchIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
