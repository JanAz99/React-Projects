// Work.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Theme4 from '../Assets/Theme4.jpg';
import Theme2 from '../Assets/Theme2.jpg';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
  const workInfoData = [
    {
      image: Theme4,
      title: 'Pick Your Refreshment',
      text: 'From Italian to Indian, the options seem endless..',
    },
    {
      image: Theme2,
      title: 'Pick Your Fruit',
      text: 'A fruit-and-veggie-loaded drink sounds righteous in theory, juices are really healthy',
    },
    {
      image: DeliveryMeals,
      title: 'Fast Deliveries',
      text: 'Packages Delivered at the Speed of Need. Deliveries in Warp Speed.',
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Choose Your Food</h1>
        <p className="primary-text">
          When it comes to food, everyone has their own personal preferences. With a world full of diverse flavors and culinary traditions, it can be challenging to choose a favorite cuisine.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <br />
            <Link to="/AddtocCart" className="secondary-button">
              Order Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
