import React from 'react';

function Section3() {
  return (
    <div className="mx-auto pb-5 px-4 lg:px-56 pt-5" style={{ background: 'linear-gradient(to right, #01589c , #002046)'}}>
      <h3 className='pt-5 text-center text-white lg:text-6xl lg:font-bold'>District Franchise</h3>

      <div className="flex flex-wrap mt-5 container ">
        <div className="lg:w-7/12 md:w-5/12 ">
          <div className='container text-white lg:ml-8'>
            <h4 className='text-white lg:text-3xl lg:font-bold'>Start Your Business with Digital Gramin Seva</h4>
            <p className='mt-3'>By getting district franchise business, you will get a well-established business model.</p>
            <p className='mt-3'>This results in fully measurable results before the investment, as well as the mentorship of an experienced entrepreneur for the duration of the contract.</p>
            <div className="pt-3 mt-5 flex flex-col lg:flex-row " >
              <div className="flex items-center  p-3 mb-3 bg-orange-500 rounded-full">
                <img src="https://digitalgraminseva.in/Content/HomePageV3/images/home/low-investment.png" width="50px" alt="Minimum Investment" className="mr-2" />
                <button className='text-white lg:text-2xl lg:font-bold'>Minimum Investment</button>
              </div>
              <div className="flex items-center  p-3 mb-3 bg-orange-500 rounded-full">
                <img src="https://digitalgraminseva.in/Content/HomePageV3/images/home/high_icon.jpg" width="50px" className="mr-2" />
                <button className='text-white lg:text-2xl lg:font-bold'>High Earning Potential</button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 md:w-5/12 text-center" >
          <img className="laptop-img" src="https://digitalgraminseva.in/Content/HomePageV3/images/home/franchise.png" width="500px" alt="franchise" />
        </div>
      </div>
      <Section3/>
    </div>
  );
}

export default Section3;
