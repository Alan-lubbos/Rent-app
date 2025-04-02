import React from "react";
import "./style.css"; 

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Heading;
