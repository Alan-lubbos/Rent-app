import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./style.css";

interface PropertyTypeProps {
  type: {
    id: number;
    name: string;
    count: number;
  };
}

const PropertyTypeCard: React.FC<PropertyTypeProps> = ({ type }) => {
  return (
    <div className="home-property-card">
      <div className="home-icon-container">
        <HomeOutlinedIcon className="home-property-icon" />
      </div>
      <h3 className="home-property-title">{type.name}</h3>
      <p className="home-property-count">{type.count} Properties</p>
    </div>
  );
};

export default PropertyTypeCard;
