import React from "react";
import "./style.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkIcon from "@mui/icons-material/Work";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Awards = () => {
  return (
    <div className="awards-container">
      <h3 className="awards-title">Our Awards</h3>
      <h2 className="awards-subtitle">
        Over <span>1,24,000+</span> Happy Users Being With Us Still
      </h2>
      <h2 className="awards-subtitle">They Love Our Services</h2>

      <div className="awards-grid">
        <div className="award-wrapper">
          <div className="award-card">
            <EmojiEventsIcon className="award-icon" />
          </div>
          <h2 className="award-number">32 M</h2>
          <p className="award-text">Blue Burmin Award</p>
        </div>

        <div className="award-wrapper">
          <div className="award-card">
            <WorkIcon className="award-icon" />
          </div>
          <h2 className="award-number">43 M</h2>
          <p className="award-text">Mimo X11 Award</p>
        </div>

        <div className="award-wrapper">
          <div className="award-card">
            <LightbulbIcon className="award-icon" />
          </div>
          <h2 className="award-number">51 M</h2>
          <p className="award-text">Australian UGC Award</p>
        </div>

        <div className="award-wrapper">
          <div className="award-card">
            <FavoriteIcon className="award-icon" />
          </div>
          <h2 className="award-number">42 M</h2>
          <p className="award-text">IITCA Green Award</p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
