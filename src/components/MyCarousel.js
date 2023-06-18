import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://digitalgraminseva.in/Content/HomePageV3/images/home/slider1.jpg',
    'https://digitalgraminseva.in/Content/HomePageV3/images/home/slider2.jpg',
    'https://digitalgraminseva.in/Content/HomePageV3/images/home/slider4.jpg',
    'https://digitalgraminseva.in/Content/HomePageV3/images/home/slider3.jpg',
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Time between slides in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="relative">
      <img
        src={images[currentSlide]}
        alt={`image ${currentSlide + 1}`}
        className="h-full w-full object-cover "
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-600 hover:text-gray-900 shadow"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-600 hover:text-gray-900 shadow"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
