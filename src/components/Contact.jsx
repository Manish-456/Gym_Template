import React, {useState, useRef} from "react";

import "../components/Contact.css";
import emailjs from '@emailjs/browser';
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {

const form = useRef()

  const [val, setVal] = useState();
  const [value, setValue] = useState();
  const [mess, setMess] = useState();
  const [sub, setSub] = useState()
  const nameHandler = (e) => {
    setVal(e.target.value);
  };
  const emailHandler = (e) => {
    setValue(e.target.value);
  };
  const messageHandler = (e) => {
    setMess(e.target.value);
  };
  const subHandler = (e) => {
    setSub(e.target.value);
  };

  const location = useLocation()
  const sendEmail = (e) => {
   e.preventDefault();
 
   emailjs.sendForm('service_kefbiod', 'template_ve68eay', form.current, 'Rz5Bubsg7FUr5QTTL')
   alert("Message sent successfully")
   setVal('')
    setValue('')
    setSub(" ")
    setMess('')
    }
  return (
    <div>
     <div className="contact">
      <div className="main-contact">
       <div className="contact-content">
   <h1 className="C-head">HOME<span className="C-span">{location.pathname.toUpperCase()}</span></h1>
     <p className="Cont-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, delectus. <br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, eligendi?</p>
       </div>
      </div>
     </div>
   
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <h3 className="form-head">Get In Touch</h3>
          <label htmlFor="name">
            {" "}
            <h5 className="f-head">
              {" "}
              Enter your name <span className="star">*</span>
            </h5>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={val}
              onChange={nameHandler}
              minLength="3"
              required
            />
          </label>
          <label htmlFor="email">
            {" "}
            <h5 className="f-head">
              {" "}
              Enter your email <span className="star">*</span>
            </h5>
            <input
              type="email"
              className="input"
              name="email"
              id="email"
              value={value}
              onChange={emailHandler}
              required
            />
          </label>
          <label htmlFor="subject">
            {" "}
            <h5 className="f-head">
              {" "}
              Subject 
            </h5>
            <input
              type="text"
              className="input"
              name="subject"
              id="subject"
              value={sub}
              onChange={subHandler}
              required
            />
          </label>
          <label htmlFor="message">
            {" "}
            <h5 className="f-head"> Enter your message <span className="star">*</span></h5>
            <textarea
              className="input"
              type="message"
              cols="30"
              name="email"
              id="email"
              value={mess}
              onChange={messageHandler}
              minLength="5"
            />
          </label>
          <button type="submit" value="send" className="btn30 btn btn-primary">
            Submit
          </button>
        </form>
        <div className="iframe">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=biratchowk%20morang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://www.whatismyip-address.com/divi-discount/">
                divi discount
              </a>
              <br />
              
              <a href="https://www.embedgooglemap.net">
                embed google maps into website
              </a>
        
            </div>
          </div>
        </div>
      </div>
       <div className="icon-home">
      
        <div className="social-icons">
         <a className="Facebook" href="http://www.facebook.com/Manish_Tamang" target="_blank"><i className="fab fa-facebook fa-4x"></i></a> 
         <a className="Twitter" href="http://www.twitter.com" target="_blank"><i className="fab fa-twitter fa-4x"></i></a> 
         <a className="Github" href="http://www.github.com" target="_blank"><i className="fab fa-github fa-4x"></i></a> 
        </div>
    
       </div>

      <Footer />
    </div>
  );
};

export default Contact;
