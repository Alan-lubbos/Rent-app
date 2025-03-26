import React from "react";
import "./style.css";
import Back from "../Common/back/Back"; 
import banner from "../../assets/images/banner.png"; 
import Packages from "../Home/Packages/packages";

const Pricing: React.FC = () => {
  return (
    <section className="pricing">
      <Back name="Pricing" title="Our Pricing Plans" cover={banner} />
      <div className="pricing-container">
        <Packages /> 
      </div>
    </section>
  );
};

export default Pricing;
