import React from 'react'
import './header.css';
import HamburgerMenu from './HamburgerMenu.jsx';
import { Link } from 'react-router-dom';


const welcomes = [
    {
        name: "draco",
        country: "Nigeria",
        greeting: "Wagwan"
    },
  /*   {
        name: "chen",
        country: "Japan",
        greeting: "Konnichiwa"
    },
    {
        name: "singh",
        country: "India",
        greeting: "Namaste"
    },
    {
        name: "Mustapha",
        country: "Saudi Arabia",
        greeting: "Salam Alaykum"
    }, */
];


function RegisteredUser() {

    return (
        <div className='header-deux'>

            <div className='username-deux'>
                {welcomes.map((welcome) => (
                    <Link to={"/"}><h3 key={welcome.id} className='username-deux'> {welcome.greeting} {/* &nbsp; */} <span className='username-deux'>{welcome.name}</span> <i class="fa-solid fa-bolt"></i></h3></Link>
                ))}
            </div>
            <span>
                <HamburgerMenu/>
                <i class="fa-solid fa-user"></i>
               {/*  <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-gear"></i> */}
            </span>





















        </div>
    );


}

export default RegisteredUser;