import React from 'react';

const Section1 = () => {
  const contributions = [
    { value: '7,00,000+', label: 'Distributor' },
    { value: '5,000+', label: 'Retailers' },
    { value: '200+', label: 'Sup Distributor' },
    { value: '10+', label: 'Zonal Heads' },
  ];

  return (
    <div className="mx-auto pb-5 px-4 lg:px-56 pt-5" style={{ backgroundImage: 'url(https://digitalgraminseva.in/Content/HomePageV3/images/home/background2.jpg)' }}>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <img src="https://digitalgraminseva.in/Content/HomePageV3/images/home/india_map.png" alt="India Map"
         className="max-w-full h-auto" width="300px" />
        <h3 className="lg:w-64 text-white lg:text-3xl  lg:font-bold">
          7 लाख से भी ज्यादा
          <span className="text-orange-500 px-2 py-1">भारतियों</span> का योगदान
          <span className="text-green-500 px-2 py-1">भारत</span> को डिजिटल
          बनाने में।
        </h3>
        <div className="text-white">
          {contributions.map((item, index) => (
            <h3 key={index}>
              <span className="px-2 py-1">
                <button
                  className={`lg:w-80 sm:w-full w-64 pt-2 pb-2 m-2 rounded-full  ${index === 0 ? 'bg-orange-500' : index === 1 ? 
                  'bg-green-500' : index === 2 ? 'bg-blue-500' : 'bg-gray-500'} text-white `}
                >
                  <span className='lg:text-4xl lg:font-bold '>{item.value} </span>
                  <span className='lg:text-2xl lg:font-bold'>{item.label}</span>
                </button>
              </span>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
