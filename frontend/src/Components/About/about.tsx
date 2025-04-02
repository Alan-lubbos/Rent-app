import React from "react";
import banner from "../../assets/images/banner.png"; 
import "./style.css"; 
import Back from "../Common/back/Back"; 
import AgencyStory from "../Common/Agencystory/AgencyStory";

const About: React.FC = () => {
  return (
    <section className="about">
      <Back name="About Us" title="About Us - Who We Are?" cover={banner} /> 
      
      
      <AgencyStory /> 
    </section>
  );
};

export default About;
