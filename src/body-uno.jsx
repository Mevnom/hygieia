import React, { useState } from "react";
import './body-uno.css'
import Select from "react-select";
import hygieia from './assets/hygieia.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const countryWelcomMessage = [
    { Country: "Nigeria", message: "Haffa" },
    { Country: "India", message: "Namaste" },
    { Country: "America", message: "Howdy there" },
    { Country: "Japan", message: "Konnichiwa" },
];

const welcomeMessage = ({ Country, message }) => (
    <span>
        {Country}  {message}
    </span>
);


function Body() {

    const [selectedCountry, setSelectedCountry] = useState(countryWelcomMessage.find((Country) => Country.value === "Nigeria"));

    const handleChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

      const alertM = () => {
    alert('This feature will be available soon!')
  };


    return (
        <div className="body">
            <div className="body-uno">
                <span>
                <h2>
                   Who is <span>hygeia</span>?
                </h2>
                </span>
                <div>
                    <span className="whois-hygieia">
                        <p>
                            <span>hygieia</span> is a tech company founded on the 20th of february, 2025 by <a href="https://www.linkedin.com/in/mukhtar-yagboyaju-8255a4304" target="blank">Yagboyaju Mukhtar</a>.
                            The modern-day culture is shifting towards unhealthy living and artificial body conformations, hygieia is a software designed specifically to guide users towards healthy living, with software that is tailor-made to each user and functions based on user information.
                            The basic plan is a mobile application that keeps track of the user's activities and health status when they're wiith their mobile phones.
                            The advanced plan however, comes with modified accessories designed to keep track of the user's every activity and health status, this information is provided to the user along with tailor-made routines/diets/workouts so that they are constantly aware of their health status.
                            Purchase <Link to={"/Products"}> <a href="">products</a> </Link> from hygieia or <a href="" onClick={alertM}>subscribe</a> to get the full product description.
                        </p>
                    </span>
                    <div>
                        <div className="body-unoimg">
                            <h3>hygieia.co</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default Body;