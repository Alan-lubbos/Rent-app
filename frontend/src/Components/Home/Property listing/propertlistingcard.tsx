import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaceIcon from "@mui/icons-material/Place";
import "./style.css";

interface PropertyListingCardProps {
  property: {
    id: number;
    title: string;
    address: string;
    price: number;
    property_type: string;
    image_url: string;
  };
}

const PropertyListingCard: React.FC<PropertyListingCardProps> = ({ property }) => {
  return (
    <div className="property-card">
      <img
        src={property.image_url}
        alt={property.title}
        className="property-image"
      />
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
  );
};

export default PropertyListingCard;
