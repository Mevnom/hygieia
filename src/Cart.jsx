import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {

  const handleClick = () => {
    alert('This feature will be available soon!');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-btn"  onClick={handleClick}>Proceed to Payment</button>
    </div>
  );
};

export default Cart;
