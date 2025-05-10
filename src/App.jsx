import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './header.jsx';
import RegisteredUser from './UserHeader.jsx';
import UserBody from './UserBody.jsx';
import Select from "react-select";
import Body from './body-uno.jsx'
import ProductCatalogue from './ProductCatalogue';
import HealthFactsSlideshow from './Healthfacts.jsx';
import Signup from './pages/Signup.jsx';
import Contact from './Contact.jsx'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import UIprototype from './pages/UIprototype.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';



function App() {




  return (
    <div className='container-uno'>


{/*       <nav>
        <Link to="/">Home</Link> |
        <Link to="/Login">Login</Link> |
        <Link to="/Signup">Contact</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/UIprototype" element={<UIprototype />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>


      {/* <span>
        <Header />
      </span>



      <HealthFactsSlideshow />

      <span>
        < Body />
      </span>
      <span>
        < ProductCatalogue />
      </span>

      <span>
        <RegisteredUser />
      </span>


      <span>
        <UserBody />
      </span>

      <span>
        <Signup />
      </span>

      <span>
        <Contact />
      </span>

      <span>
        <Login />
      </span>
 */}
    </div >
  );

}


export default App;
