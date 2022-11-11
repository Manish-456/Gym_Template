import React from 'react'
import './Blog.css'
import cat1 from "../components/images/cat1.png"
import pullups from '../components/images/pullups.jpg'
import pushups from '../components/images/pushups.jpg'
import squats from '../components/images/squats.jpg'
const Blog = () => {
  return (
    <div>
     <div className='Blog-container'>
      <h5 className='Blog-head'>BLOG</h5>
      <h2 className='Blog-subhead'>OUR RECENT BLOG</h2>
      <div className="B-container">
       <div className="B-outer">

        <div className="B-inner">
         <img className="B-img" src={pullups} alt="img not found" />
          <div className='B-innercontent'>
           <h6 className='B-h6'>DEC. 20, 2020 <span className='Blog-cmnt'> 3 COMMENTS </span></h6>
           <h3 className='B-h3'>REALLY GOOD WORKOUT, CAN FEEL IT WORKING</h3>
            <p className='B-para'>A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          </div>
     
        <div className="B-inner">
         <img className="B-img" src={pushups} alt="img not found" />
          <div className='B-innercontent'>
           <h6 className='B-h6'>DEC. 20, 2020 <span className='Blog-cmnt'> 3 COMMENTS </span></h6>
           <h3 className='B-h3'>REALLY GOOD WORKOUT, CAN FEEL IT WORKING</h3>
            <p className='B-para'>A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          </div>
     
        <div className="B-inner">
         <img className="B-img" src={squats} alt="img not found" />
          <div className='B-innercontent'>
           <h6 className='B-h6'>DEC. 20, 2020 <span className='Blog-cmnt'> 3 COMMENTS </span></h6>
           <h3 className='B-h3'>REALLY GOOD WORKOUT, CAN FEEL IT WORKING</h3>
            <p className='B-para'>A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          </div>
     
        <div className="B-inner">
         <img className="B-img" src={cat1} alt="img not found" />
          <div className='B-innercontent'>
           <h6 className='B-h6'>DEC. 20, 2020 <span className='Blog-cmnt'> 3 COMMENTS </span></h6>
           <h3 className='B-h3'>REALLY GOOD WORKOUT, CAN FEEL IT WORKING</h3>
            <p className='B-para'>A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          </div>
     
          

       
       </div>
       </div> 
     </div>
    </div>
  )
}

export default Blog
