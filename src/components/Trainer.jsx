import React from 'react'
import larry from '../components/images/larry.png'
import therock from '../components/images/therock.png'
import ludkibody from '../components/images/ludkibody.png'

import './Trainer.css'
const Trainer = () => {
 const info = [
  {
   img: larry,
   name: "larry",
   position: "Ladies Gym Trainer" 
 },
 {
  img: ludkibody,
  name: "Anny Marie",
  position: "Yoga Trainer" 
},
{
 img: therock,
 name: "David Otto",
 position: "Ladies Gym Trainer" 
},


]


  return (
    <div className='T-cont'>
     <div className='T-head'>
     <h5 className='T-5'>TRAINER</h5>
     <h2 className='T-1'>FITNESS TRAINER</h2></div>
     <div className="T-container">
      <div className="T-outer">
       {info.map(e => {
        return <div key={e.name}  className="T-inner" >
        <img className='T-img' id='T-image' src={e.img} alt="img not found" />
         
          <div className="T-content">
           <h3 className='T-h3'>{e.name}</h3>
           <h4 className='T-h4'>{e.position}</h4>
          </div>
       </div>

       })}
     
      </div>
     </div>
    </div>
  )
}

export default Trainer
