import React from "react";
import "./style.css";
import Heading from "../heading/Heading";
import banner from "../../../assets/images/banner.png";

const AgencyStory: React.FC = () => {
  return (
    <section className="agency-story">
      <div className="text-content">
        <Heading title="Our Agency Story" subtitle="Check out our company story and work process" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <button className="btn">More About Us</button>
      </div>
      <div className="image-content">
        <img src={banner} alt="Agency Story" /> 
      </div>
    </section>
  );
};

export default AgencyStory;
