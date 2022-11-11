import React from 'react'
import jump from '../components/images/jump.png'
import './Info.css'
const Info = () => {
  return (
    <div>
        <div className='I-container container'>
         <div className='info-head'>
          <div className="in-img">
          <img src={jump} className="I-img" alt="img not found" /></div>
          <div className="I-contents">
          <h5 className="I-head">Information About Us  </h5>
          <h3 className='I-subhead'>BEAST A <span className='color'>CROSSFIT</span> WORKOUT TRAINING <span className='Center'>CENTER</span></h3>
          <p className='I-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit <br/>. Optio voluptatem esse alias corporis at accusantium, totam dignissimos <br/> mollitia amet vitae ipsum dicta fugit autem iste. Ex vitae. <br/> explicabo modi reprehenderit?</p>
           <span className='I-para'><span>&rarr;</span>  MEN FITNESS AND WORKOUT</span> <br />
           <span className='I-para'><span>&rarr;</span>  WOMEN FITNESS AND WORKOUT</span><br />
           <span className = "I-para"><span>&rarr;</span>  PERSONAL TRAINING</span> <br />
         </div>
        </div>
    </div>
    </div>
  )
}

export default Info
