import React from "react";
import "./style.css";
import Back from "../Common/back/Back"; // Import the Back component
import banner from "../../assets/images/banner.png"; // Use the banner image for the back section (optional)
import PropertyListing from "../Home/Property listing/propertylisting";

const Blog: React.FC = () => {
  return (
    <section className="blog">
      {/* Add the Back component here */}
      <Back name="Blog" title="Our Blog - Latest Articles" cover={banner} />

      {/* Blog content and PropertyListing below */}
      <div className="blog-container">
        <PropertyListing /> {/* This is where your PropertyListing component will be rendered */}
      </div>
    </section>
  );
};

export default Blog;
