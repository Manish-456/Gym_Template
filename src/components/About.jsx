import React from 'react'
import '../components/About.css'
import {useLocation} from "react-router-dom"
import Join from './Join';
import Services from '../components/Services';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Trainer from './Trainer';
import Footer from './Footer';
import Info from './Info';
const About = () => {
 const location = useLocation();

  return (
   <>
    <div className='.Ab-container '>
     <div className='Ab-main'>
      <div className="AboutCont">

        <h1 className='Ab-h1'> HOME {location.pathname.toUpperCase()}</h1>
         <p className='Ab-Para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Officia qui illo vero dolor quasi suscipit a inventore saepe rerum unde.</p>
      </div>
    
     </div>
     
      </div>
    <div className="joinee">
     <Info />
      <Join />
      <Services />
      <Pricing />
    <Trainer />
      <Testimonials />
      <Footer />
      </div>
   </>
  )
}

export default About
