import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    <div>
      <div className='P-Container container'>
       <div className="P-box">
         <h5 className='P-head'>OUR PRICING</h5>
         <h1 className='P-subHead'>PRICING & PACKAGES</h1>
         <div className='P-mainCont'>
          <div className="P-start">
           <div className="p-Content">
            <h4 className='P-h4'>BASIC PLAN</h4>
            <span>Monthly</span> <br/>
            <span className='P-int'>$250</span> <span className='P-actual'>$200 </span> <br/>
            <span className='P-services'>&rarr; Personal Trainer</span><br/>
            <span className='P-services'>&rarr; Convinent Time</span><br/>
            <span className='P-services'>&rarr; Special Class</span><br/>
            <span className='P-services'>&rarr; Group Training</span><br/>
            <span className='P-services'>&rarr; Free Fitness Training</span>
            <button type="button" className='P-btn btn btn-danger'>GET STARTED</button>
           </div>
           <div className="p-Content">
            <h4 className='P-h4'>BEGINNER PLAN</h4>
            <span>Monthly</span><br/>
            <span className='P-int'>$300</span> <span className='P-actual'>$250 </span><br/>
            <span className='P-services'>&rarr; Personal Trainer</span><br/>
            <span className='P-services'>&rarr; Convinent Time</span><br/>
            <span className='P-services'>&rarr; Special Class</span><br/>
            <span className='P-services'>&rarr; Group Training</span><br/>
            <span className='P-services'>&rarr; Free Fitness Training</span>
            <button type="button" className='P-btn btn btn-danger'>GET STARTED</button>
           </div>
           <div className="p-Content">
            <h4 className='P-h4'>PREMIUM PLAN</h4>
            <span>Monthly</span><br/>
            <span className='P-int'>$500</span> <span className='P-actual'>$450</span><br/>
            <span className='P-services'>&rarr; Personal Trainer</span><br/>
            <span className='P-services'>&rarr; Convinent Time</span><br/>
            <span className='P-services'>&rarr; Special Class</span><br/>
            <span className='P-services'>&rarr; Group Training</span><br/>
            <span className='P-services'>&rarr; Free Fitness Training</span>
            <button type="button" className='P-btn btn btn-danger'>GET STARTED</button>
           </div>
           <div className="p-Content">
            <h4 className='P-h4'>ULTIMATE PLAN</h4>
            <span>Monthly</span><br/>
            <span className='P-int'>$600</span> <span className='P-actual'>$500</span><br/>
            <span className='P-services'>&rarr; Personal Trainer</span><br/>
            <span className='P-services'>&rarr; Convinent Time</span><br/>
            <span className='P-services'>&rarr; Special Class</span><br/>
            <span className='P-services'>&rarr; Group Training</span><br/>
            <span className='P-services'>&rarr; Free Fitness Training</span>
            <button type="button" className='P-btn btn btn-danger'>GET STARTED</button>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
    
  )
}

export default Pricing
