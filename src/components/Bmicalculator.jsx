import React, { useState } from 'react'
import './Bmi.css'
import uweight from '../components/images/uweight.jpg'
import hbody from '../components/images/hbody.png'
import oweight from '../components/images/oweight.webp'
const Bmicalculator = () => {
 const [weight, setWeight] = useState()
 const [height, setHeight] = useState()
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  const [imgsrc, setImgsrc] = useState(hbody)
  const calcBmi = (e) => {
    e.preventDefault()
   let bmi = (weight / (height * height) * 703)
   setBmi(bmi.toFixed(1)) 
    
   if (bmi < 25){
    setMessage("You are underweight")
    setImgsrc(uweight)
   }
   else if( bmi >= 25 && bmi < 30){
    setMessage("You are a healthy weight")
    setImgsrc(hbody)
   }
   else{
    setMessage("you are overweight")
    setImgsrc(oweight)
   }
  }
  const reload = () => {
    setBmi(" ")
    setWeight(" ")
    setHeight(" ")
    setMessage(" ")
    setImgsrc(hbody)
  }
 return (
    <div className='apps container'>
      <div className='bmi-container'>
       <div className="bmi-outer">
        <h2 className='BMI-head'>BMI Calculator</h2>
         <form onSubmit={calcBmi} >
          <div>
            <label><h5 className='M-bmi'>Weight (lbs)</h5> 
              <input value={weight} onChange={e => {setWeight(e.target.value)}} required />
            </label>
          </div>
          <div>
            <label> <h5 className='M-bmi'>Height (in)</h5> 
              <input value={height} onChange={e => {setHeight(e.target.value)}}  required/>
            </label>
          </div>
           <div className='bm'>
            <button  id="submit" className=' btn btn-primary' type='submit'>Submit</button>
            <button id="reset" className=' btn btn-danger' onClick={reload} type='reset'>Reset</button>
           </div>
         </form>
         <div className='center'>
          <h3 className='bmi-result'>Your BMI is : {bmi}</h3>
          <p>{message}</p>
         </div>
         <div className="img-container">
          <img src={imgsrc} alt="" />
         </div>
       </div>
      </div>
    </div>
  )
}

export default Bmicalculator
