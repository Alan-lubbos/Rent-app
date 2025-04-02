import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProperties } from "../../State/Selectors/property-listingSelectors";
import banner from "../../assets/images/banner.png";
import "./style.css";
import Back from "../Common/back/Back";

const PropertyPage: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButtonClick = () => {
    setIsSelected(!isSelected);
  };
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const properties = useSelector(selectProperties);

  // Find the selected property
  const property = properties.find((prop) => prop.id === Number(id));

  if (!property) {
    return <div className="property-page"><h2>Property not found.</h2></div>;
  }

  return (
    <div className="property-page">
      {/* Back Component right below the Navbar */}
      <Back name="Property Details" title={property.title} cover={banner} />

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <div className="content">
        <h1>Ready to Book Your Villa?</h1>
        <p>Do not waste any time, book now to get a discount!</p>

        <div className="property-card-detail">
          <img src={property.image_url} alt={property.title} className="property-image" />
          <h3>{property.title}</h3>
          <p>{property.address}</p>
          <p className="price">${property.price} / month</p>
          <p className="type">{property.property_type}</p>

        </div>
        <button className={`btn5 ${isSelected ? "selected" : ""}`} onClick={handleButtonClick}>
          Book Now
        </button>;
      </div>


    </div>
  );
};

export default PropertyPage;
