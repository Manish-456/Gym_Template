import React from 'react'
import {useLocation} from "react-router-dom"
import Join from './Join';
import Services from '../components/Services';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Trainer from './Trainer';
import Footer from './Footer';
import Aboutpiece from './Aboutpiece';
import '../components/Classes.css'

const Classes = () => {

 const location = useLocation();
 


 return (
    <div>
     <div className='Cls-container'>
      <div className="Cls-main">
       <div className="cls-content">
         <h1 className='Ab-h1'> HOME {location.pathname.toUpperCase()}</h1>
          <p className='C-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aperiam cum natus perspiciatis totam ratione ipsa molestias dolor nam at vel?</p>
       </div>
      </div>

     </div>
     <div className="joinee">
            <Aboutpiece />
     
      <Join />
      <Services />
      <Pricing />
    <Trainer />
      <Testimonials />
      <Footer />
      </div>       
 </div>

  )
}

export default Classes
