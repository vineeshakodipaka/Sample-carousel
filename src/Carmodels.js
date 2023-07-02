import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carmodels = () => {
    const [data,setData]=useState(
        [
            {
              "Model": "Tata Nexon",
              "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tata_Nexon_Blue_Dual_Tone.jpg/1920px-Tata_Nexon_Blue_Dual_Tone.jpg",
              "id": "1"
            },
            {
              "Model": "Hyundai Creta",
              "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg/1200px-2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg",
              "id": "2"
            },
            {
              "Model": "Station Wagon",
              "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNq_y4JAnmX9Lvem6UJji7eaWrB4MPTSBYg2MNd7eBA168lpmq",
              "id": "3"
            },
            {
              "Model": "Hyundai Venue",
              "Image": "https://images.law.com/contrib/content/uploads/sites/414/2023/04/1.-Hyundai-Santa-Fe.jpg",
              "id": "4"
            },
            {
              "Model": "BMW 3 Series",
              "Image": "https://images.autotrader.com/hn/c/84ebff1bcec74722bf5c2170062103d4.jpg",
              "id": "5"
            },
            {
              "Model": "Hyundai i20",
              "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Hyundai_i20_%28BC3%29_IMG_5670.jpg/1200px-Hyundai_i20_%28BC3%29_IMG_5670.jpg",
              "id": "6"
            },
            {
              "Model": "Maruti Suzuki",
              "Image": "https://newsroompost.com/wp-content/uploads/2022/08/Maruti-Suzuki-Alto-K10.jpg",
              "id": "7"
            },
            {
              "Model": "Audi A4",
              "Image": "https://images.dealer.com/evox/color_2400_032/MY2020/14340/14340_cc2400_032_2D2D.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
              "id": "8"
            },
            {
              "Model": "Audi A3",
              "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwatAzeVsgTRV1Hvti5Q76hHFjabp0HvCzf-dvgE_78KFgSmkBYszg_20FGCmJVZA3rao&usqp=CAU",
              "id": "9"
            },
            {
              "Model": "BMW X5",
              "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPkMZ9DNfY5FVl4AVh7Ih06-VRLaii9jFmiZZ7Z6wN7EAdtGVBggoraBitkTTOI965Hw&usqp=CAU",
              "id": "10"
            },
            {
              "Model": "Grand tourer",
              "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEhgR2gh1Xhc09c3_JM2lZVILRxW7nZdu7sn8vwHlKISivGTBk4KR5er_bgVuyMr5aN8&usqp=CAU",
              "id": "11"
            },
            {
              "Model": "Ford Model T",
              "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-a03w7_XPFkWVyUq09598EfQXV_VSWu28W43HgQvJSefQgrxcGXXucKxaRRIYc1Ooa8&usqp=CAU",
              "id": "12"
            },
            {
              "Model": "Pony Car",
              "Image": "https://upload.wikimedia.org/wikipedia/commons/2/2d/1964_12_Ford_Mustang.jpg",
              "id": "13"
            },
            {
              "Model": "Toyota GR",
              "Image": "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/cms/uploads/ygegi7it3grfkqcipsie",
              "id": "14"
            },
            {
              "Model": "Honda Fit",
              "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoX9Pt3h0SxQNtYM2biBBaJ0uZGAQ-GnMXDhsm80qCbL5jCqbc8LOQIh3DlUfQEEHvtw&usqp=CAU",
              "id": "15"
            }
          ]
    )

     
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [slidesToShow, setSlidesToShow] = useState(3);
  
    useEffect(() => {
      // Filter the car models based on the search term
      const filteredModels = data.filter((model) =>
        model.Model.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredModels);
  
      // Update the slidesToShow based on the search term
      if (searchTerm !== '') {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    }, [searchTerm, data]);
        // Custom previous arrow component
        const SamplePrevArrow = (props) => {
            const { className, style, onClick } = props;
            return (
                <div
                className={className}
                style={{
                  ...style,
                  display: 'block',
                  background: 'black', // Button background color
                  borderRadius: '40px', 
                  border: '1px solid #000', 
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', 
                  color: 'black', 
                }}
                onClick={onClick}
              >
                Previous
              </div>
          
            );
          };
        
          // Custom next arrow component
          const SampleNextArrow = (props) => {
            const { className, style, onClick } = props;
            return (
                <div
                className={className}
                style={{
                  ...style,
                  display: 'block',
                  background: 'black',
                  borderRadius: '40px', 
                  border: '1px solid #000', 
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', 
                  color: 'black', 
                }}
                onClick={onClick}
              >
                Next
              </div>
            );
          };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow, // Display 3 cards per slide
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // Display 2 cards per slide on screens larger than 1024px width
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1, // Display 1 card per slide on screens smaller than 768px (small screens)
            },
          }
        ],
        prevArrow: <SamplePrevArrow />, // Custom previous arrow component
        nextArrow: <SampleNextArrow />, // Custom next arrow component
      };
   
    
  return (
    <div className="container mx-auto py-6">
    <div className="px-10">
      <h1 className="text-3xl font-bold underline text-center mb-5">
        Different Carmodels
      </h1>
      <div className="mb-4 mx-auto text-center">
          <input
            type="text"
            placeholder="Search car model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      <Slider {...settings}>
        {filteredData.map((ele) => (
          <div key={ele.id} className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 ">
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-5 ">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-3">{ele.Model}</h2>
              </div>
              <img src={ele.Image} alt={ele.Model} className="w-full h-96 object-cover mx-auto py-auto mt-5" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default Carmodels