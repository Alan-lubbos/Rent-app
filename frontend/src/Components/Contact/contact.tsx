import React from "react";
import img from "../../assets/images/banner.png"; 
import "./style.css"; 
import Back from "../Common/back/Back";

const Contact: React.FC = () => {
  return (
    <>
      <section className="contact mb">
       
        <Back name="Contact Us" title="Get Help & Friendly Support" cover={img} />
        
        <div className="container">
          {/* Contact form */}
          <form className="shadow">
            <h4>Fill up the Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            
            <textarea cols={30} rows={10} placeholder="Message"></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
