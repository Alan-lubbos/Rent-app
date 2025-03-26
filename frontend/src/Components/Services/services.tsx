import React from "react";
import "./style.css";
import Back from "../Common/back/Back"; // Import the Back component
import banner from "../../assets/images/banner.png"; // If you want to use a banner image for the back section
import PropertyTypes from "../Home/Propert-types/properttypes";

const Services: React.FC = () => {
  return (
    <section className="services">
      {/* Add the Back component here */}
      <Back name="Services" title="Our Services - What We Offer" cover={banner} />

      {/* Services content below */}
      <div className="services-container">
        <PropertyTypes/>
        

       
       
        {/* You can continue adding more services here */}
      </div>
    </section>
  );
};

export default Services;
