import React from 'react';

const About = () => {
  return (
    <div className='text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(https://digitalgraminseva.in/Content/HomePageV3/images/home/background2.jpg)' }}>
      <div className="container mx-auto px-5 lg:px-56">
        <div >
          <div className="pt-5">
            <h1 className="text-4xl font-bold mb-4">About Digital Gramin Seva</h1>
            <p className="mb-4 text-xl">
              Digital Gramin Seva is a leading provider of banking, government, and non-government services in India. The company was founded in 2019 by two entrepreneurs, Mr. Narayan Singh and Mrs. Kumari, with the goal of providing quality banking and financial services to the rural population of India. Since then, we have expanded our services to include government and non-government services. Digital Gramin Seva started its operations with a small team of 20 employees and has now grown to a team of over 200 employees.
            </p>
            <p className="mb-4 text-xl">
              Digital Gramin Seva offers a range of banking services such as Aadhar-based payment system, cash deposit, money transfer, Aadhar pay, and account opening. The company also provides government services such as filing income tax returns, PAN card application, and passport application. Digital Gramin Seva also offers non-government services such as bill payment, mobile recharge, and utility bill payment.
            </p>
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
            <button className="bg-green-500 p-4 text-white lg:w-98 lg:text-2xl lg:font-bold">5+ Years Experience</button>
              <button className="bg-orange-500 p-4 text-white lg:w-98 lg:text-2xl lg:font-bold">India's No #1 Digital Service Provider</button>
              <div className="lg:ml-10">
                <img src="https://digitalgraminseva.in/Content/HomePageV3/images/home/india.png" alt="India" className="max-w-full h-auto lg:mb-0" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
