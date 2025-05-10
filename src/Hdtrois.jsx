import React from 'react';
import './Hdtrois.css';
import HamburgerMenu from './HamburgerMenu.jsx';
import CountrySelector from './CountrySelector.jsx';
import { Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function DefaultHeader() {


    return (
        <div className='dhd'>

            <div>
                <h2>
                    <Link to={"/"}>hygieia.co</Link>
                </h2>

            </div>

            <span><HamburgerMenu /></span>





















        </div>
    );


}

export default DefaultHeader;