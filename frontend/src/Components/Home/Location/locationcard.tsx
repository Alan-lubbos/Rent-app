import React from "react";
import "./style.css";

interface LocationProps {
  location: {
    id: number;
    name: string;
    image_url: string;
    villas: number;
    offices: number;
    apartments: number;
  };
}

const LocationCard: React.FC<LocationProps> = ({ location }) => {
  return (
    <div className="location-card">
      <img src={location.image_url} alt={location.name} className="location-image" />
      <div className="location-overlay">
        <h3 className="location-name">{location.name}</h3>
        <p className="location-details">
          {location.villas} Villas • {location.offices} Offices • {location.apartments} Apartments
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
