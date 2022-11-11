import React from "react";
import "../components/Schedule.css";
import { useLocation } from "react-router-dom";
import Join from "./Join";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Trainer from "./Trainer";
import Bmicalculator from "./Bmicalculator";
const Schedule = () => {
  const location = useLocation();
  return (
    <div>
      <div className="Sc-container">
        <div className="Sc-main">
          <div className="Sc-head">
            <h1 className="H-color">
              {" "}
              HOME
              <span className="S-span">{location.pathname.toUpperCase()}</span>
            </h1>
            <p className="Sc-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, non.{" "}
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam, laborum.
            </p>
          </div>
        </div>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead className="thead-primary">
            <tr>
              <th scope="row" className="scope">
                &nbsp;
              </th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="scope">
                8am-9am
              </th>
              <td>Body Building</td>
              <td>Weigh tLifting</td>
              <td>&nbsp;</td>
              <td>Cardio</td>
              <td>Aerobics</td>
              <td>Cycling</td>
              <td>Stretching</td>
            </tr>
            <tr>
              <th scope="row" className="scope">
                10am-11am
              </th>
              <td>Yoga</td>
              <td>Aerobics</td>
              <td>Leg Exercise</td>
              <td>Weight Lifting</td>
              <td>Cycling</td>
              <td>Aerobics</td>
              <td>Stretching</td>
            </tr>
            <tr>
              <th scope="row" className="scope">
                1pm-2pm
              </th>
              <td>&nbsp;</td>
              <td>Weight Lifting</td>
              <td>Yoga</td>
              <td>Cycling</td>
              <td>Aerobics</td>
              <td>Leg Exercise</td>
              <td>Stretching</td>
            </tr>
            <tr>
              <th scope="row" className="scope">
                3pm-4pm
              </th>
              <td>Yoga</td>
              <td>Weight Lifting</td>
              <td>Aerobics</td>
              <td>Leg Exercise</td>
              <td>Cycling</td>
              <td>&nbsp;</td>
              <td>Stretching</td>
            </tr>
            <tr>
              <th scope="row" className="scope scope7">
                5pm-6pm
              </th>
              <td>Yoga</td>
              <td>&nbsp;</td>
              <td>Weight Lifting</td>
              <td>Body Building</td>
              <td>&nbsp;</td>
              <td>Cycling</td>
              <td>Stretching</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Services />
      <Join />
      <Trainer />
      <Testimonials />
      <Bmicalculator/>
      <Footer />
    </div>
  );
};

export default Schedule;
