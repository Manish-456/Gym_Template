import React from "react";
import "../components/Aboutpage.css";
import yoga from "../components/images/yoga.jpg";
import basic from "../components/images/basic.jpg";
import legexc from "../components/images/legexc.jpg";
import heavy from "../components/images/heavy.jpg";
import chestexc from "../components/images/chestexc.jpg";
import welleqq from "../components/images/welleqq.jpg";
const Aboutpiece = () => {
  const data = [
    {
      img: basic,
      name: "Basic Exercise",
    },
    {
      img: yoga,
      name: "Yoga",
    },
    {
      img: legexc,
      name: "leg Exercise",
    },
    {
      img: heavy,
      name: "Cardio Exercise",
    },
    {
      img: chestexc,
      name: "Body Building",
    },
    {
      img: welleqq,
      name: "Well Equipped Gym",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="A-outer">
          <div className="A-inner A-section">
            <h1 className="A-heading">Our Classes</h1>
       
            <div className="A-card">
          
                <div className="A-card-content">
                  <div className="A-card-inner">
                    <div className="img">
                      <img
                        className="A-img"
                        src={data[0].img}
                        alt="img not found"
                      />
                    </div>
                    <h3 className="A-content">{data[0].name}</h3>
                    <p className="A-para">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque, nulla odio, molestiae pariatur consectetur
                      quisquam animi quam ullam, tenetur amet ab quod. Natus eos
                      quam minima officia explicabo numquam ipsam?
                    </p>
                    <button type="button" className="button">
                      Enroll Now
                    </button>
                  </div>
                </div>
                <div className="A-card-content">
                  <div className="A-card-inner">
                    <div className="img">
                      <img
                        className="A-img"
                        src={data[1].img}
                        alt="img not found"
                      />
                    </div>
                    <h3 className="A-content">{data[1].name}</h3>
                    <p className="A-para">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque, nulla odio, molestiae pariatur consectetur
                      quisquam animi quam ullam, tenetur amet ab quod. Natus eos
                      quam minima officia explicabo numquam ipsam?
                    </p>
                    <button type="button" className="button">
                      Enroll Now
                    </button>
                  </div>
                </div>
                <div className="A-card-content">
                  <div className="A-card-inner">
                    <div className="img">
                      <img
                        className="A-img"
                        src={data[2].img}
                        alt="img not found"
                      />
                    </div>
                    <h3 className="A-content">{data[2].name}</h3>
                    <p className="A-para">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque, nulla odio, molestiae pariatur consectetur
                      quisquam animi quam ullam, tenetur amet ab quod. Natus eos
                      quam minima officia explicabo numquam ipsam?
                    </p>
                    <button type="button" className="button">
                      Enroll Now
                    </button>
                  </div>
                </div>
                <div className="A-card-content">
                  <div className="A-card-inner">
                    <div className="img">
                      <img
                        className="A-img"
                        src={data[3].img}
                        alt="img not found"
                      />
                    </div>
                    <h3 className="A-content">{data[3].name}</h3>
                    <p className="A-para">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque, nulla odio, molestiae pariatur consectetur
                      quisquam animi quam ullam, tenetur amet ab quod. Natus eos
                      quam minima officia explicabo numquam ipsam?
                    </p>
                    <button type="button" className="button">
                      Enroll Now
                    </button>
                  </div>
                </div>
                <div className="A-card-content">
                  <div className="A-card-inner">
                    <div className="img">
                      <img
                        className="A-img"
                        src={data[4].img}
                        alt="img not found"
                      />
                    </div>
                    <h3 className="A-content">{data[4].name}</h3>
                    <p className="A-para">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque, nulla odio, molestiae pariatur consectetur
                      quisquam animi quam ullam, tenetur amet ab quod. Natus eos
                      quam minima officia explicabo numquam ipsam?
                    </p>
                    <button type="button" className="button">
                      Enroll Now
                    </button>
                  </div>
                </div>
                <div className="A-card-content">
                  <div className="A-card-inner">
                    <div className="img">
                      <img
                        className="A-img"
                        src={data[5].img}
                        alt="img not found"
                      />
                    </div>
                    <h3 className="A-content">{data[5].name}</h3>
                    <p className="A-para">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque, nulla odio, molestiae pariatur consectetur
                      quisquam animi quam ullam, tenetur amet ab quod. Natus eos
                      quam minima officia explicabo numquam ipsam?
                    </p>
                    <button type="button" className="button">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
   
        </div>
      </div>
      <hr />
    </>
  );
};

export default Aboutpiece;
