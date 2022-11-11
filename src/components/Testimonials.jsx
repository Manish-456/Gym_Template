import React from "react";
import "./Testimonials.css";
import "swiper/css";
import "swiper/css/effect-cards";
// import "./styles.css";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sagars from "../components/images/sagars.png";
const Testimonials = () => {
  const test = [
    {
      img: sagars,
      name: "Sagar Tmg",
      paragraph:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: sagars,
      name: "Anny Marie",
      paragraph:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: sagars,
      name: "David Motto",
      paragraph:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },

    {
      img: sagars,
      name: "larry",
      paragraph:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: sagars,
      name: "Anny Marie",
      paragraph:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: sagars,
      name: "David Otto",
      paragraph:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];
  return (
    <div className="Test-container container">
      <h3 className="Test-heading">TESTIMONIAL</h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <div className="Test-content">
          <div className="Test-main">
            {test.map((e) => {
              return (
                <SwiperSlide>
                  {" "}
                  <div key={e.name} className="Test-inner">
                    <img className="Test-img" src={e.img} alt="img not found" />
                    <h3 className="Test-h3">{e.name}</h3>
                    {/* <i className="fa-solid fa-quote-left fa-2x"></i> */}
                    <p className="Test-para">{e.paragraph}</p>
                    {/* <i className="fa-solid fa-quote-right fa-2x" ></i> */}
                  </div>{" "}
                </SwiperSlide>
              );
            })}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
