import React from "react";
import "../Styles/AboutUs.css";
import profileImage from "../assets/aboutOne.png"; // replace with your image path

const AboutUs = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="imageContainer">
        <img src={profileImage} alt="Profile" className="image" />
      </div>
      <div className="textContainer">
        <h1 className="title">ABOUT US</h1>
        <h2>Our Mission</h2>
        <p>
          At the National Scholarship Portal, our mission is to bridge the gap
          between students and educational opportunities by providing an
          inclusive and efficient digital platform dedicated to the distribution
          of scholarships. We are dedicated to ensuring that every deserving
          student, regardless of their socio-economic background, has equal
          access to financial support that can significantly impact their
          academic journey.
        </p>
        <p>
          We aim to revolutionize the scholarship application and disbursement
          processes by leveraging cutting-edge technology to streamline every
          step—from application submission to fund allocation. Our commitment to
          enhancing these processes ensures that students can navigate the
          system with ease and confidence, minimizing bureaucratic hurdles and
          delays.
        </p>
        <p>
          We are driven by the belief that education is a fundamental right and
          a powerful tool for personal and societal advancement. By supporting
          students from diverse backgrounds, we not only help them achieve their
          academic and career aspirations but also contribute to the broader
          goal of fostering a more educated, skilled, and inclusive society.
          Through our mission, we aspire to create a positive and lasting impact
          on the lives of students, empowering them to reach their full
          potential and actively contribute to the nation’s progress and
          prosperity.
        </p>

        <div className="socialIcons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
