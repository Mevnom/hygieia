import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Cart from "./Cart.jsx";
import "./ProductCatalogue.css";
import hygieia from "./assets/hygieia.png";

const products = {
  accessories: [
    { id: 1, name: "Stained Jade Ring", price: 49.99, image: hygieia },
    { id: 2, name: "Plain hyper Band", price: 79.99, image: hygieia },
    { id: 3, name: "Draco Wrist Dome", price: 129.99, image: hygieia },
    { id: 4, name: "Men's Hyper 'IV'", price: 49.99, image: hygieia },
    { id: 5, name: "Collection 'I' Neck Band", price: 79.99, image: hygieia },
    { id: 6, name: "Mod 'V' Head-gear", price: 129.99, image: hygieia },
  ],
  smartWear: [
    { id: 7, name: "Fore-arm Sleeve", price: 123.49, image: hygieia },
    { id: 8, name: "Hyper 'V' titanium glasses", price: 199.99, image: hygieia },
    { id: 9, name: "Plain Vest", price: 59.99, image: hygieia },
    { id: 10, name: "Chin Guard", price: 123.49, image: hygieia },
    { id: 11, name: "Leg Sleeve", price: 199.99, image: hygieia },
    { id: 12, name: "Arm Band", price: 59.99, image: hygieia },
  ],
  footWear: [
    { id: 13, name: "Sneakers", price: 89.99, image: hygieia },
    { id: 14, name: "Mod 'V' Socks", price: 99.99, image: hygieia },
    { id: 15, name: "Leg Band", price: 149.99, image: hygieia },
    { id: 16, name: "Sneakers", price: 89.99, image: hygieia },
    { id: 17, name: "Loafers", price: 99.99, image: hygieia },
    { id: 18, name: "Toe Sleeve", price: 149.99, image: hygieia },
  ],
};

const ProductCatalogue = () => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const alertM = () => {
    alert('Item added! Scroll down to cart')
  }

  return (
    <div className="catalogue-container">
      {/* <h1 className="catalogue-heading"></h1> */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="notification">
          <FaCheckCircle /> {notification}
        </motion.div>
      )}
      <div className="catalogue-grid">
        {Object.entries(products).map(([category, items]) => (
          <div key={category} className="category-section">
            <h1><motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="category-heading">
              {category.toUpperCase()}
            </motion.h2></h1>
            <div className="product-grid">
              {items.map((product) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button onClick={() => {addToCart(product); alertM(product);} } className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default ProductCatalogue;
