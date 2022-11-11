import React from "react";
import '../components/Join.css'
import Treadmill from "../components/images/Treadmill.svg";
 import fittness from "../components/images/fitness.svg"
 import vipcard from "../components/images/vipcard.svg"
 const Join = () => {
  return (
   <>
    <div className="container">
      <div className="J-container">
        <h4 className="J-h4">Join Us Now!</h4>
        <h2 className="J-subhead">
          JOIN US OUR FREE WORKOUT <br /> TRAINING WITH{" "}
          <span className="color">BEAST</span>
        </h2>
        <div className="J-mainCont">
          <div className="J-start">
            <img className="J-img"  src={fittness} alt="" />
            <h1 className="J-h1">FREE FITNESS TRAINING</h1>
            <p className="J-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo nisi quos fugit corporis mollitia iure itaque eos
              praesentium illo libero.
            </p>
          </div>
          <div className="J-start">
            <img className="J-img im" src={Treadmill} alt="" />
            <h1 className="J-h1 J1-h1">TONS OF CARDIO & STRENGTH</h1>
            <p className="J-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo nisi quos fugit corporis mollitia iure itaque eos
              praesentium illo libero.
            </p>
          </div>
          <div className="J-start">
            <img  className="J-img" src={vipcard} alt="" />
            <h1 className="J-h1 J1-h1">NO COMMIMENT MEMBERSHIPS</h1>
            <p className="J-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo nisi quos fugit corporis mollitia iure itaque eos
              praesentium illo libero.
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    </>
  );
};

export default Join;
