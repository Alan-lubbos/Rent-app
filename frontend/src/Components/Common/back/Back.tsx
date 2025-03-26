import React from "react";
import "./style.css";

interface BackProps {
  name: string;
  title: string;
  cover: string;
}

const Back: React.FC<BackProps> = ({ name, title, cover }) => {
  return (
    <section className="back" style={{ backgroundImage: `url(${cover})` }}>
      <div className="overlay">
        <div className="container">
          <p>{name}</p>
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Back;
