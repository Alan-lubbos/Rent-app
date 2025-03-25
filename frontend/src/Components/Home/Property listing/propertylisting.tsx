import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaceIcon from "@mui/icons-material/Place";
import { AppDispatch, RootState } from "../../../State/Store/store";
import { getProperties } from "../../../State/Action/actions";

const PropertyListing: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const properties = useSelector((state: RootState) => state.properties.properties);
  const loading = useSelector((state: RootState) => state.properties.loading);

  useEffect(() => {
    dispatch(getProperties()); // Fetch properties on mount
  }, [dispatch]);
  console.log(properties);

  return (
    <div className="property-listing">
    <h2>Available Properties</h2>
    {loading ? (
      <p>Loading properties...</p>
    ) : (
      <div className="property-grid">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image_url} alt={property.title} className="property-image" />
              <div className="property-header">
                <span className="for-rent">For Rent</span>
                <FavoriteIcon className="favorite-icon" />
              </div>
              <div className="property-details">
                <h3>{property.title}</h3>
                <div className="property-location">
                  <PlaceIcon className="location-icon" />
                  <span>{property.address}</span>
                </div>
                <div className="thin-divider"></div>
                <div className="property-footer">
                  <button className="price-btn">${property.price}</button>
                  <span className="sqft-text">/sqft</span>
                  <span className="property-type">{property.property_type}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    )}
  </div>
  
  );
};

export default PropertyListing;
