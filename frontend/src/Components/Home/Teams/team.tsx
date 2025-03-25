import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "./style.css";

// Define props type
interface TeamCardProps {
  name: string;
  location: string;
  listings: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, location, listings, image }) => {
  const socialIcons = [
    { component: <FacebookIcon />, name: "Facebook" },
    { component: <InstagramIcon />, name: "Instagram" },
    { component: <LinkedInIcon />, name: "LinkedIn" },
    { component: <EmailIcon />, name: "Email" },
  ];

  return (
    <div className="team-card">
      <div className="listings-badge">{listings} Listings</div>
      <div className="avatar-wrapper">
        <img src={image} alt={name} className="avatar" />
      </div>
      <div className="location">
        <LocationOnIcon className="icon" /> {location}
      </div>
      <h3 className="name">{name}</h3>
      <div className="social-icons">
        {socialIcons.map((icon, index) => (
          <div key={index} className="icon-wrapper" title={icon.name}>
            {icon.component}
          </div>
        ))}
      </div>
      <div className="contact-buttons">
        <button className="message-button">
          <EmailIcon className="icon" /> Message
        </button>
        <button className="call-button">
          <PhoneIcon className="icon" /> Call
        </button>
      </div>
    </div>
  );
};

const Teams: React.FC = () => {
  const agents = [
    { name: "Harijeet M. Siller", location: "Montreal, Canada", listings: "70", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "John Doe", location: "New York, USA", listings: "50", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Jane Smith", location: "London, UK", listings: "80", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Emily Johnson", location: "Los Angeles, USA", listings: "60", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Michael Brown", location: "Toronto, Canada", listings: "90", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Sophia Lee", location: "Sydney, Australia", listings: "55", image: "https://randomuser.me/api/portraits/women/6.jpg" },
  ];

  return (
    <div className="background">
      <h2 className="title">Our Featured Agents</h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <p className="subtitle">Ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

      <div className="team-wrapper">
        <div className="team-row">
          {agents.slice(0, 3).map((agent, index) => (
            <TeamCard key={index} {...agent} />
          ))}
        </div>
        <div className="team-row">
          {agents.slice(3, 6).map((agent, index) => (
            <TeamCard key={index + 3} {...agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
