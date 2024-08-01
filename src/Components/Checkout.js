import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleConfirmOrder = () => {
    alert('Thank you for your order! Your Order has been Placed!');
    localStorage.removeItem('cart');
    setCart([]);
    navigate('/');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Checkout</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Shopping Cart</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {cart.length === 0 && <li>Your cart is empty</li>}
          {cart.map(item => (
            <li key={item.id} style={{ marginBottom: '8px' }}>
              {item.name} - ${item.price} (x{item.quantity})
            </li>
          ))}
        </ul>

        <Link to="/" className="secondary-button1">
              Go to Home
            </Link>
            <br/>
            <Link to="/AddtocCart" className="secondary-button1">
              Go back to Orders
            </Link>
        {cart.length > 0 && (
          <div>
            <strong>
              Total: ${getTotalPrice()}
            </strong>
            <div style={{ marginTop: '20px' }}>
              <button
                onClick={handleConfirmOrder}
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
                Confirm Order
              </button>

              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
