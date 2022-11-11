import React  from "react";
import Aboutpiece from '../components/Aboutpiece'
import "./Homepage.css";
import body from "../components/images/body.png";
import Services from '../components/Services'
import Info from "./Info";
import Join from "./Join";
import Pricing from "./Pricing";
import Trainer from "./Trainer";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Bmicalculator from "./Bmicalculator";
import Footer from "./Footer";



const HomePage = () => {



  return (
    <>
           
  <div className="H-container">
    <div className="H-box">
      <div className="H-contents">
        <div className="H-cont">
        <h2 className="H-topic">Wake Up With Determination <br />Sleep With Satisfaction</h2>
        <p className="H-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ut?</p>
        <button type="submit" className=" btn1 btn btn-primary">Become a member</button>
       </div>
        <div className="H-image">
          <img src={body} className="H-img" alt="" />
        </div>
      </div>
    </div>
  </div>
    <Info />
  <Aboutpiece />
 <Join />
  <Services />
 <Pricing />
  <Trainer />
   <Testimonials />
   <Blog />
  <Bmicalculator />
  <Footer /> 
    </>
  );
};

export default HomePage;
