import React, { useRef } from 'react';
import ReviewCard from './ReviewCard';
import reviewData from '../../api/reviewData.json';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ReviewSection = () => {
  const carouselRef = useRef(null);

  // Scroll function
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
     
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }

    
  };

  return (
    <div className="flex flex-col p-4 py-6 gap-5 md:gap-15 pb-80 md:pb-44 bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Title and Navigation Buttons */}
      <div className="flex items-center justify-between px-2.5">
        <div className='flex justify-between w-full  items-center'>
        <h1 className="text-[38px] leading-tight md:text-6xl  font-extrabold font-poppins flex-1">
          Our Happy Customers
        </h1>
        <div className="flex gap-3">
        <button 
            onClick={() => scrollCarousel('left')} 
            >
          <FaAngleLeft size={30}  className='cursor-pointer'/>
          </button>
          <button 
            onClick={() => scrollCarousel('right')} 
            >
            <FaAngleRight size={30} className='cursor-pointer'/>
          </button>
        </div>
        </div>
      </div>

      <div ref={carouselRef} className="carousel rounded-box w-full space-x-6 overflow-x-scroll no-scrollbar scroll-smooth">
        {reviewData.map((data, i) => (
          <div key={i} className="carousel-item md:w-[320px]">
            <ReviewCard name={data.name} review={data.review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
