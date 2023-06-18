import React from 'react';
const data=[
  {
   imageUrls: 'https://digitalgraminseva.in/Content/HomePageV3/images/home/banking_service.png',
   text:'Government Services',
  },
  {
    imageUrls:'https://digitalgraminseva.in/Content/HomePageV3/images/home/bill_payment.png',
    text:'Bill Payment Services',
  },
  {
    imageUrls:'https://digitalgraminseva.in/Content/HomePageV3/images/home/government_services.png',
    text:'Banking Services',
  },
  {
    imageUrls: 'https://digitalgraminseva.in/Content/HomePageV3/images/home/company_registration.png',
    text:'Travel Booking Services',
  },
  {
    imageUrls:'https://digitalgraminseva.in/Content/HomePageV3/images/home/tax_filing_services.png',
    text:'Tax Filing Services',
  },
  {
    imageUrls:'https://digitalgraminseva.in/Content/HomePageV3/images/home/travel_booking.png',
    text:'Company Registration Services',
  }
]

function ImageGrid() {
  const customBackgrounds = ['#FFA500', '#FFFFFF', '#268526'];
  return (
    <div className='mx-auto lg:px-8' style={{ backgroundImage: 'url(https://digitalgraminseva.in/Content/HomePageV3/images/home/bg1.jpg)'}}>
    <div className="pb-5 lg:p-8" >
      <center ><h5 className='pt-5 pb-5 lg:font-medium :text-lg lg:text-6xl sm:text-lg' style={{color:'orange',fontWeight:'700'}}>
        Digital Gramin Seva <span style={{color:'green'}}>Provides 50+ Services
          </span></h5></center>
      <div className="grid lg:grid-cols-3 lg:gap-1 sm:grid-cols-1 justify-center items-center" >
        
        {data.map((dta, index) => (
          <div
          key={index}
          className={`flex items-center h-80   lg:p-3 lg:gap-4`}
          style={{ backgroundColor: customBackgrounds[index % 3] }}
        >
          
            <img src={dta.imageUrls} alt={`Image ${index + 1}`} className="max-w-full" width="130px" />
            <p className="font-medium text-lg lg:text-2xl">{dta.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ImageGrid;
