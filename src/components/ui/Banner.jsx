import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (

    <div className="w-full text-black dark:text-white flex flex-col md:flex-row justify-center items-center px-4 md:px-8  pt-28 md:pt-32 bg-gradient-to-r from-[#F2F0F1] to-[#E0E7FF] dark:from-[#1E1E1E] dark:to-[#2C2C2C]">
      <div className="flex flex-col md:items-start items-center justify-center space-y-3 md:space-y-4 text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold  ">
          FIND CLOTHES <br className="hidden md:block" /> THAT MATCHES <br className="hidden md:block" /> YOUR STYLE
        </h1>
        <div className="space-y-4 flex flex-col md:items-start items-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-md">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black dark:bg-white dark:text-black text-white font-bold rounded-lg px-7 py-3 hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
            <Link to={'/products'} className="hover:text-white dark:hover:text-black">
              Shop Now
            </Link>
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:ml-10 lg:ml-20">
        <img
          src={'/banner.png'}
          alt="banner"
          className="h-[296px]  md:h-[600px] object-contain "
        />
      </div>
    </div>
  );
};

export default Banner;