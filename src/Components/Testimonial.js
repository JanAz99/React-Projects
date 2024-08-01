import React from "react";
import ProfilePic from "../Assets/ProfilePic.jpg";
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-subheading">Top Reviews</h1>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        “If you’re a foodie like me, you’ll love this place! The menu has a fantastic selection of dishes, and we loved everything we tried. 
        We only had good comments about the food. I can’t wait to come back again!”
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        “From appetizers to desserts, this restaurant exceeded all our expectations! Our family especially enjoyed the appetizers, the variety of desserts, and the hand-churned ice cream!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Rachel Zen</h2>
      </div>
    </div>
  );
};

export default Testimonial;