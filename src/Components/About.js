import React from "react";
import AboutBackground from "../Assets/about-background.png";
import Mango1 from "../Assets/Mango1.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img  className="about-section-image-container1" src={Mango1} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Fruits and vegetables are an essential part of a healthy diet. 
        They are rich in nutrients and can lower our risk of chronic diseases such as cardiovascular diseases and certain cancers.
        </p>
        <p className="primary-text">
        A healthy diet contains a balanced mix of different foods that together provide all essential nutrients.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button"> <a href="https://www.medicalnewstoday.com/articles/324431"   target="_blank" 
  rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Learn More</a> </button>
          <button className="watch-video-button">
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;