import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import playstore from '../Images/playstore.png';

const Navbar = () => {
  const linkStyles = {
    color: "black",
    transition: "color 0.3s",
    textDecoration: "none",
  };

  const linkHoverStyles = {
    color: "red",
  };

  const handleIconHover = (e) => {
    e.target.style.color = "red";
  };

  const handleIconHoverOut = (e) => {
    e.target.style.color = linkStyles.color;
  };
  const [selectedLanguage, setSelectedLanguage] = React.useState("");

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Japanese",
    "Chinese",
    "Russian",
    "Portuguese",
    "Arabic"
  ];
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  return (
    <nav style={{ background: "#d8dbd7" ,width:"100%"}}>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 links">
            
          <Link
              to="/"
              
              style={linkStyles}
              onMouseEnter={(e) =>
                (e.target.style.color = linkHoverStyles.color)
                
              }
              onMouseLeave={(e) =>
                (e.target.style.color = linkStyles.color)
              }
            >
            <FontAwesomeIcon
              icon={faPhone}
              
            />&nbsp;
            
              +91-8852634895
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">
              <span>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                supportdigitalseva@gmail.com
              </span>
            </Link>
          </div>
       
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:text-gray-200"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-white hover:text-gray-200"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-white hover:text-gray-200"
              >
                Services
              </Link>
              <Link
                to="/"
                className="text-white hover:text-gray-200"
              >
                Contact
              </Link>
            
              <select
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded-md  leading-tight focus:outline-none focus:border-gray-500"
                value={selectedLanguage}
                onChange={handleLanguageChange}
               
              >
                <option value="">Select Language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
           
            </div>
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
