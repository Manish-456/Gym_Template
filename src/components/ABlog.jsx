import React from "react";
import { useLocation } from "react-router-dom";
import Blog from "./Blog";
import "./Blog.css";
import cat1 from "../components/images/cat1.png";
import pullups from "../components/images/pullups.jpg";
import pushups from "../components/images/pushups.jpg";
import squats from "../components/images/squats.jpg";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Bmicalculator from "./Bmicalculator";
import Footer from "./Footer";

const ABlog = () => {
  const location = useLocation();

  

  return (
    <div>
      <div className="ABL-container">
        <div className="ABL-main">
          <div className="ABL-content">
            <h1 className="ABL-head">
              HOME
              <span className="ABL-span">
                {location.pathname.toUpperCase()}
              </span>
            </h1>
            <p className="ABL-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              alias!
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              officiis.
            </p>
          </div>
        </div>
      </div>
      <div className="BL-container">
        <Blog />

        <div className="Blog-container">
          <div className="B-container">
            <div className="B-outer">
              <div className="B-inner">
                <img className="B-img" src={pullups} alt="img not found" />
                <div className="B-innercontent">
                  <h6 className="B-h6">
                    DEC. 20, 2020{" "}
                    <span className="Blog-cmnt"> 3 COMMENTS </span>
                  </h6>
                  <h3 className="B-h3">
                    REALLY GOOD WORKOUT, CAN FEEL IT WORKING
                  </h3>
                  <p className="B-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                </div>
              </div>

              <div className="B-inner">
                <img className="B-img" src={pushups} alt="img not found" />
                <div className="B-innercontent">
                  <h6 className="B-h6">
                    DEC. 20, 2020{" "}
                    <span className="Blog-cmnt"> 3 COMMENTS </span>
                  </h6>
                  <h3 className="B-h3">
                    REALLY GOOD WORKOUT, CAN FEEL IT WORKING
                  </h3>
                  <p className="B-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                </div>
              </div>

              <div className="B-inner">
                <img className="B-img" src={squats} alt="img not found" />
                <div className="B-innercontent">
                  <h6 className="B-h6">
                    DEC. 20, 2020{" "}
                    <span className="Blog-cmnt"> 3 COMMENTS </span>
                  </h6>
                  <h3 className="B-h3">
                    REALLY GOOD WORKOUT, CAN FEEL IT WORKING
                  </h3>
                  <p className="B-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                </div>
              </div>

              <div className="B-inner">
                <img className="B-img" src={cat1} alt="img not found" />
                <div className="B-innercontent">
                  <h6 className="B-h6">
                    DEC. 20, 2020{" "}
                    <span className="Blog-cmnt"> 3 COMMENTS </span>
                  </h6>
                  <h3 className="B-h3">
                    REALLY GOOD WORKOUT, CAN FEEL IT WORKING
                  </h3>
                  <p className="B-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Blog-container">
          <div className="B-container">
            <div className="B-outer">
              <div className="B-inner">
                <img className="B-img" src={pullups} alt="img not found" />
                <div className="B-innercontent">
                  <h6 className="B-h6">
                    DEC. 20, 2020{" "}
                    <span className="Blog-cmnt"> 3 COMMENTS </span>
                  </h6>
                  <h3 className="B-h3">
                    REALLY GOOD WORKOUT, CAN FEEL IT WORKING
                  </h3>
                  <p className="B-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                </div>
              </div>

              <div className="B-inner">
                <img className="B-img" src={pushups} alt="img not found" />
                <div className="B-innercontent">
                  <h6 className="B-h6">
                    DEC. 20, 2020{" "}
                    <span className="Blog-cmnt"> 3 COMMENTS </span>
                  </h6>
                  <h3 className="B-h3">
                    REALLY GOOD WORKOUT, CAN FEEL IT WORKING
                  </h3>
                  <p className="B-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                </div>
              </div>

              <div className="B-inner">
                <img className="B-img" src={squats} alt="img not found" />
                <div className="B-innercontent">
                  <h6 className="B-h6">
                    DEC. 20, 2020{" "}
                    <span className="Blog-cmnt"> 3 COMMENTS </span>
                  </h6>
                  <h3 className="B-h3">
                    REALLY GOOD WORKOUT, CAN FEEL IT WORKING
                  </h3>
                  <p className="B-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                </div>
              </div>

              <div className="B-inner">
                <img className="B-img" src={cat1} alt="img not found" />
                <div className="B-innercontent">
                  <h6 className="B-h6">
                    DEC. 20, 2020{" "}
                    <span className="Blog-cmnt"> 3 COMMENTS </span>
                  </h6>
                  <h3 className="B-h3">
                    REALLY GOOD WORKOUT, CAN FEEL IT WORKING
                  </h3>
                  <p className="B-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
      <Services />
      <Testimonials />
      <Bmicalculator />
      <Footer />
    </div>
  );
};

export default ABlog;
