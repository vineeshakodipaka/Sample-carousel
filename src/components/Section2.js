import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Section2 = () => {
  const items = [
    {
      text: 'No need any type of Certificate or Exam',
      iconSrc: 'https://digitalgraminseva.in/Content/HomePageV3/images/home/correct_icon.png',
    
    },
    {
      text: 'Instant ID Activate',
      iconSrc: 'https://digitalgraminseva.in/Content/HomePageV3/images/home/correct_icon.png',
    
    },
    {
      text: 'Earn More than Rs 25,000 per month',
      iconSrc: 'https://digitalgraminseva.in/Content/HomePageV3/images/home/correct_icon.png',
    
    }
  ];
  return (
    <div className='lg:pt-5 lg:pb-5 lg:p-8' style={{ backgroundImage: 'url(https://digitalgraminseva.in/Content/HomePageV3/images/home/bg1.jpg)' }}>
      <div className='text-white  lg:mx-8 lg:px-5 '>
      <div className='bg-orange-500 rounded-lg p-3 lg:mx-8'>
      <h3 className="text-white lg:text-6xl lg:font-bold">Become a Retailer</h3>
      <p className="text-white lg:text-lg lg:font-bold mt-4">
        As a retailer in Digital Gramin Seva, you will have the opportunity to provide banking, bill payment, government and tax filing services to your community, and earn an attractive income in return
      </p>
      <p className='mt-4'>
        To become a retailer in Digital Gramin Seva, you will need to meet the eligibility criteria set by the digital gramin seva and complete the registration process. Some of the key requirements include:
      </p>
      <div className="flex flex-wrap">
      <div className="w-full lg:w-3/5">
      <ul className="list-disc m-5 ">
        <li>A Computer or Laptop</li>
        <li>A Pan Card</li>
        <li>A Computer or Laptop</li>
        <li>A Computer or Laptop</li>
      </ul>
      <h2 className="text-white lg:text-2xl lg:font-bold">
        As a retailer in Digital Gramin Seva, you will have the opportunity to provide banking, bill payment, government and tax filing services to your community, and earn an attractive income in return
      </h2>
      <ul className="p-4 m-3 text-lg font-bold bg-green-500 lg:rounded-full sm:rounded-md lg:w-98" >
        <li><FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} /> Banking Services</li>
        <li><FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} /> Bill payments for electricity, water, and other utilities</li>
        <li><FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} /> Government services such as PAN card application</li>
        <li><FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} /> Tax filing services for individuals and businesses</li>
      </ul>
      </div>
      <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="https://digitalgraminseva.in/Content/HomePageV3/images/home/retailer.png" alt="Retailer" />
          </div>
      </div>
      </div>
      </div>
      {/* another section */}
      <div className="flex mt-5 mb-5 text-2xl text-black flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-3">
            <img src={item.iconSrc} alt={item.altText} className={`lg:mr-3 ${index === 1 ? 'lg:ml-32' : ''}`} width="50px" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col mt-5 xl:flex-row items-center text-black justify-center">
  <div className="flex flex-wrap items-center">
    <div className="flex flex-row">
      <img
        src="https://digitalgraminseva.in/Content/HomePageV3/images/home/aadhar-card.png"
        alt="Aadhar Card icon"
        className="mr-2 lg:w-98 sm:w-35 md:w-64"
        width="100px"
      />
      <span className="mx-2 mt-3 lg:text-8xl font-bold text-orange-500">+</span>
      <img
        src="https://digitalgraminseva.in/Content/HomePageV3/images/home/pan_card.png"
        alt="Pan Card icon"
        className="mr-2 lg:w-98 sm:w-35 md:w-64"
        width="100px"
      />
    </div>
  </div>
  <div className="ml-4 mt-2">
    <h4 className="lg:text-4xl font-bold sm-text-2xl">
      <span>An</span>
      <span className="text-orange-500"> Aadhar Card</span>
      <span>+</span>
      <span className="text-orange-500">Pan Card</span>
    </h4>
    <h5 className="lg:text-2xl sm:text-2xl font-bold lg:mt-3 sm-mt-2">will open your business</h5>
  </div>
</div>

<div className='text-center'>
<h1 className='italic mt-5 text-black-500 lg:text-5xl sm:text-2xl font-bold lg:mt-3 sm-mt-2'>
  Start Your Business With Us</h1>
  <button className="w-80 p-3 mt-4  mb-5 text-white lg:text-4xl font-bold  sm:text-2xl font-lg lg:mt-3 rounded-none bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-400 hover:to-orange-400 transition-all duration-400 ease-in-out">
  REGISTER NOW
</button>

  </div>
    </div>
  );
}

export default Section2;
