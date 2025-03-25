import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import banner from "../../assets/images/banner.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { RootState, AppDispatch } from "../../State/Store/store";
import PropertyListing from "./Property listing/propertylisting";
import { getPropertyTypes } from "../../State/Action/actions";
import Awards from "./Awards/awards";
import Location from "./Location/location";
import Teams from "./Teams/team";
import Packages from "./Packages/packages";
import Footer from "../Footer/footer";


const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const propertyTypes = useSelector((state: RootState) => state.properties.propertyTypes);
  const loading = useSelector((state: RootState) => state.properties.loading);

  useEffect(() => {
    dispatch(getPropertyTypes());
  }, [dispatch]);

  return (
    <div className="home-container">
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
              <TextField variant="outlined" fullWidth className="search-input" placeholder="Enter city or street" />
            </div>
            <div className="divider"></div>

            <div className="input-group">
              <label>Property Type</label>
              <TextField variant="outlined" fullWidth className="search-input" placeholder="Enter property type" />
            </div>
            <div className="divider"></div>

            <div className="input-group">
              <label>Price Range</label>
              <TextField variant="outlined" fullWidth className="search-input" placeholder="Enter price range" />
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

      <div className="featured-section">
        <h2 className="featured-title">Featured Property Types</h2>
        <p className="featured-subtitle">Find All Types of Property.</p>

        <div className="home-property-types">
          {loading ? (
            <p>Loading property types...</p>
          ) : (
            <>
              {propertyTypes.length > 0 ? (
                propertyTypes.slice(0, 5).map((type) => (
                  <div className="home-property-card" key={type.id}>
                    <div className="home-icon-container">
                      <HomeOutlinedIcon className="home-property-icon" />
                    </div>
                    <h3 className="home-property-title">{type.name}</h3>
                    <p className="home-property-count">{type.count} Properties</p>
                  </div>
                ))
              ) : (
                <p>No property types found.</p>
              )}
            </>
          )}
        </div>
      </div>

      <PropertyListing />
      <Awards/>
      <Location/>
      <Teams/>
      <Packages/>
      <Footer/>
      
      
      
    </div>
  );
};

export default Home;
