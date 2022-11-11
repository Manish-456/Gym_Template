import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className="F-container ">
      <div className="main-container">
        <div className="inner-container">
        <h1 className="co-name con-name"><i className="fas fa-dumbbell"></i>BEAST</h1>
     <h6 className="co-name con-name" style={{color: "cyan", marginTop: "-10px"}}>CROSSFIT & FITNESS</h6>
         <div className="F-grid">

         
        <ul className="F-ul">
          <li className="F-explore">Explore</li>
          <li><Link className = "nav-link active" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/classes">Classes</Link></li>
          <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
          <li><Link className="nav-link" to="/schedule">Schedule</Link></li>
          <li><Link className="nav-link" to="/contact">Contact</Link></li>
       
        </ul>
        <ul className="F1-ul">
            <li className="F-contacts">Contacts</li>
            <li className="F-contact"><i class="fa-solid fa-location-dot"></i>  Biratchowk street no. 7 Nepal Indrapur</li>
            <li className="F-contact"><i class="fa-solid fa-phone-volume "></i> 021- 456390</li>
            <li className="F-contact"><i className="fa-solid fa-paper-plane"></i>  Email@gmail.com</li>
           </ul>
        </div>
      </div>
    </div>
    <div >
  <p className="F-para"> &copy; BEAST CROSSFIT & FITNESS . All Rights Reserved</p>
  </div>
  </div>
  
  </>
  );
};

export default Footer;

       
