import React from "react";
import "./style.css";
import Back from "../Common/back/Back"; 
import banner from "../../assets/images/banner.png"; 
import PropertyListing from "../Home/Property listing/propertylisting";

const Blog: React.FC = () => {
  return (
    <section className="blog">
      
      <Back name="Blog" title="Our Blog - Latest Articles" cover={banner} />

      
      <div className="blog-container">
        <PropertyListing /> 
      </div>
    </section>
  );
};

export default Blog;
