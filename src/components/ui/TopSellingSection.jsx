import React, { useRef } from 'react'
import HomePageProductsCard from './HomePageProductsCard'
import productsData from '../../api/productsData.json'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import useCart from '../../contexts/CartContext';

const TopSellingSection = () => {

   const {addToCart} =useCart();

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
        <div className=' text-black dark:text-white bg-gradient-to-r from-[#F2F0F1] to-[#E0E7FF] dark:from-[#1E1E1E] dark:to-[#2C2C2C]'>
            <div className="flex flex-col p-4 py-6 gap-5 md:gap-15 ">
                {/* Title and Navigation Buttons */}
                <div className="flex items-center justify-between px-2.5">
                    <div className='flex justify-between w-full  items-center'>
                        <h1 className="text-[35px] leading-tight md:text-6xl  font-extrabold font-poppins flex-1">
                            TOP SELLING
                        </h1>
                        <div className="flex gap-3">
                            <button
                                onClick={() => scrollCarousel('left')}
                            >
                                <FaAngleLeft size={30} className='cursor-pointer' />
                            </button>
                            <button
                                onClick={() => scrollCarousel('right')}
                            >
                                <FaAngleRight size={30} className='cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>

                <div ref={carouselRef} className="carousel p-3 px-6 rounded-box w-full space-x-4  overflow-x-scroll no-scrollbar scroll-smooth">
                    {productsData.filter((products) => products.isTopSelling ).map((data) => (
                        <div key={data.id} className="carousel-item">
                            <HomePageProductsCard name={data.name} discountedPrice={data.discountedPrice} actualPrice={data.actualPrice} image={data.image} 
                            addToCart={addToCart}/>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    )
}

export default TopSellingSection