import React from 'react';
import './header.css';
import HamburgerMenu from './HamburgerMenu.jsx';
import CountrySelector from './CountrySelector.jsx';
import { Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Header() {


    return (
        <div className='hd'>

            <div>
                <h2>
                    <Link to={"/"}>hygieia.co</Link>
                </h2>

            </div>
            <span>
                 <HamburgerMenu /> 
                <Link to={"/Signup"}>
                <button className="button" >Sign up</button>
                </Link>
                <CountrySelector />
            </span>





















        </div>
    );


}

export default Header;