import { useState } from "react";
import './HamburgerMenu.css';
import UIprototype from "./pages/UIprototype.jsx"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Router } from 'react-router-dom';

const HamburgerMenu = () => {
  // State to manage menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const alertM = () => {
    alert('This feature will be available soon!')
  }

  const navigate = useNavigate();

  return (
    <div className="hamburger-menu">
      {/* Hamburger Icon */}
      <i
        className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}
        onClick={toggleMenu}
        style={{ cursor: "pointer", fontSize: "18px" }}
      ></i>

      {/* Menu Content */}
      {isOpen && (
        <div className="menu">
          <ul>
            <Link to={"/"}><li>
              <button > Home </button>
            </li></Link>
            <Link to={"/Products"}><li>
              <button > Product Catalogue </button>
            </li></Link>
            <li onClick={alertM}>
              <button >Subscription</button>
            </li>
            <Link to={"/UIprototype"}><li>
              <button>UI Prototype</button>
            </li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;