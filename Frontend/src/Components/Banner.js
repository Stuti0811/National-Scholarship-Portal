import React from "react";
import "../Styles/Banner.css";
import bannerImage1 from "../assets/banner1.png";
import bannerImage2 from "../assets/banner2.png";
import bannerImage5 from "../assets/banner5.png";
import bannerImage4 from "../assets/banner4.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-slides">
        <div className="slide">
          <img src={bannerImage4} alt="Banner 1" />
        </div>
        <div className="slide">
          <img src={bannerImage2} alt="Banner 2" />
        </div>
        <div className="slide">
          <img src={bannerImage5} alt="Banner 3" />
        </div>
        <div className="slide">
          <img src={bannerImage1} alt="Banner 4" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
