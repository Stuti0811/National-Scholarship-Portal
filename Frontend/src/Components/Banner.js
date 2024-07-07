import React from 'react';
import './Banner.css';
import bannerImage1 from '../assets/banner1.png'; 
import bannerImage2 from '../assets/banner2.png'; 
import bannerImage3 from '../assets/banner3.png'; 

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-slides">
        <div className="slide">
          <img src={bannerImage1} alt="Banner 1" />
        </div>
        <div className="slide">
          <img src={bannerImage2} alt="Banner 2" />
        </div>
        <div className="slide">
          <img src={bannerImage3} alt="Banner 3" />
        </div>
      </div>
    </div>
  );
};

export default Banner;