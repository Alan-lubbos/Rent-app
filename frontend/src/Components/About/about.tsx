import React from "react";
import banner from "../../assets/images/banner.png"; // Correct path to image
import "./style.css"; // Import the updated CSS file
import Back from "../Common/back/Back"; // Import the Back component
import AgencyStory from "../Common/Agencystory/AgencyStory";

const About: React.FC = () => {
  return (
    <section className="about">
      <Back name="About Us" title="About Us - Who We Are?" cover={banner} /> {/* Use imported image */}
      
      {/* Reusing the AgencyStory component */}
      <AgencyStory /> 
    </section>
  );
};

export default About;
