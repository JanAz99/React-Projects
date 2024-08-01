import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom'; // Import Link from React Router
import MJ from "../Assets/MJ.jpg"; 
import LJ from "../Assets/LJ.jpg"; 
import RF from "../Assets/RF.jpg"; 
import SJ from "../Assets/SJ.jpg"; 
import CC from "../Assets/CC.jpg"; 
import MM from "../Assets/MM.jpg"; 
import MC from "../Assets/MC.jpg"; 
import HN from "../Assets/HN.jpg"; 
import WW from "../Assets/WW.jpg"; 
import II from "../Assets/II.jpg"; 
import I1 from "../Assets/I1.jpg"; 
import I2 from "../Assets/I2.jpg"; 

const products = [
  { id: 1, name: 'Mango Rush', price: 37, image: MJ }, 
  { id: 2, name: 'Lemonade', price: 20, image: LJ },
  { id: 3, name: 'Rose Smoothie', price: 60, image: RF },
  { id: 4, name: 'Berry Smoothie', price: 40 , image: SJ },
  { id: 5, name: 'Cocktail', price: 50, image: CC },
  { id: 6, name: 'IceCream Mojito', price: 80 , image: MM },
  { id: 7, name: 'Mango Delight', price: 20 , image: MC },
  { id: 8, name: 'Melon Cone', price: 30 , image: WW },
  { id: 9, name: 'Blueberry Sticks', price: 30, image: HN },
  { id: 10, name: 'Soulful Sundae', price: 130 , image: II },
  { id: 11, name: 'BlackCurrant Bash', price: 140 , image: I1 },
  { id: 12, name: 'Berry Treat', price: 160 , image: I2 },
];

const AddtocCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.id === product.id);
      if (itemIndex >= 0) {
        const newCart = [...prevCart];
        newCart[itemIndex].quantity += 1;
        return newCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/checkout'); // Navigate to Checkout page
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
        Our Signature Juices & Smoothies
      </h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              width: '300px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
            }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h3 style={{ margin: '0 0 8px' }}>{product.name}</h3>
            <p style={{ margin: '0 0 16px' }}>${product.price}</p>
            <div className="testimonials-stars-container">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <br /> <br />
            </div>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Cart Summary</h2>
        <p>Total items in cart: {getTotalItems()}</p>
        <button
          onClick={handleCheckout}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Go to Checkout
        </button>
        <Link to="/" className="secondary-button1">
              Go to Home
            </Link>
      </div>
    </div>
  );
};

export default AddtocCart;
