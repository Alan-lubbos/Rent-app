import React from "react";
import "./style.css"; 
import banner from "../../../assets/images/banner.png";

import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import CustomTextField from "./CustomField/customtextfield";
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
            <CustomTextField
              label="City/Street"
              placeholder="Enter city or street"
            />
          </div>
          <div className="divider"></div>

          <div className="input-group">
            <CustomTextField
              label="Property Type"
              placeholder="Enter property type"
            />
          </div>
          <div className="divider"></div>

          <div className="input-group">
            <CustomTextField
              label="Price Range"
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
