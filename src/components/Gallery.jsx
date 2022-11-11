import React from "react";
import '../components/Gallery.css'
import { useLocation } from "react-router-dom";
import Aboutgym from "../components/images/Aboutgym.jpg";
import basic from "../components/images/basic.jpg";
import body from "../components/images/body.png";
import cat1 from "../components/images/cat1.png";
import chestexc from "../components/images/chestexc.jpg";
import Classes from "../components/images/Classes.jpg";
import heavy from "../components/images/heavy.jpg";
import johnvon from "../components/images/johnvon.png";
import larry from "../components/images/larry.png";
import ludkibody from "../components/images/ludkibody.png";
import pushups from "../components/images/pushups.jpg";
import pullups from "../components/images/pullups.jpg";
import sagars from "../components/images/sagars.png";
import squats from "../components/images/squats.jpg";
import therock from "../components/images/therock.png";
import welleqq from "../components/images/welleqq.jpg";
import yoga from "../components/images/yoga.jpg";
import Join from "./Join";
import Footer from "./Footer";
import Services from "./Services";

const Gallery = () => {
  const location = useLocation();
  const galFold = [
    {
      img: Aboutgym,
    },
    {
      img: Classes,
    },
    {
      img: basic,
    },
    {
      img: body,
    },
    {
      img: cat1,
    },
    {
      img: therock,
    },
    {
      img: welleqq,
    },
    {
      img: yoga,
    },
    {
      img: chestexc,
    },
    
    {
      img: heavy,
    },
    {
      img: johnvon,
    },
    {
      img: larry,
    },
    {
      img: ludkibody,
    },
    {
      img: pushups,
    },
    {
      img: pullups,
    },
    {
      img: sagars,
    },
    {
      img: squats,
    },
  
  ];

  return (
    <div>
      <div className="img-gallery">
        <div className="img-main">
          <div className="gallery-contents">      
            <h1 className="G-h1">HOME<span className="G-span">{location.pathname.toUpperCase()}</span></h1>
             <p className="G-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sint. <br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, tempore.</p>
          </div>
        </div>
      </div> 
         <h2 className="G-h2">OUR TRAINEES</h2>
       <h5 className="G-h5">Thank you all for  choosing us..</h5>
      <div className="gallery-pic">

        {galFold.map((e) => {
         return <div className="g-pic" key={e.img}>
          
          <img className="Gallery" src={e.img} alt="img not found" /> 
           
           <div>
          <a target="_blank" href={e.img}> 
       
          <button className="V-btn"><i class="fa-solid fa-eye"></i> View</button>  </a>
         <a  href={e.img}  download>
         <button className="D-btn" type="button"><i className="fa-sharp fa-solid fa-download"></i>Download</button></a>
              </div>
       
             </div>
     
     })}
      </div>

      <Join />
      <Services />
    <Footer />
    </div>
  );
};

export default Gallery;
