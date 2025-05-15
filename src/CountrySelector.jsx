import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";


const countries = [
    { value: "US", label: "United States", code: "US", labelCode: "+1" },
    { value: "GB", label: "United Kingdom", code: "GB", labelCode: "+44" },
    { value: "CA", label: "Canada", code: "CA", labelCode: "+1" },
    { value: "IN", label: "India", code: "IN", labelCode: "+234" },
    { value: "JP", label: "Japan", code: "JP", labelCode: "+234" },
    { value: "NG", label: "Nigeria", code: "NG", labelCode: "+234"},
  ];


  const formatOptionLabel = ({labelCode, label, code }) => (
    <div
    
    style={{
        width:"45px",
        position:"inherit"
    }}
    >
     <ReactCountryFlag countryCode={code} svg />  &nbsp; {label}
    </div>
  );

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState( countries.find((country) => country.value === "NG"));

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div
    style={{
        width:"fit-content",
        borderColor:" #3a5a40",

    }}
    >
      {/* <label htmlFor="country-select">Select a country:</label> */}
      <Select
        id="country-select"
        value={selectedCountry}
        onChange={handleChange}
        options={countries}
        formatOptionLabel={formatOptionLabel}

        style={{
                    
        }}
      />
    </div>
  );
}

export default CountrySelector;