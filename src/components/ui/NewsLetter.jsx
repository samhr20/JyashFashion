import React from 'react';

const NewsLetter = () => {
  return (
    <div className='text-white dark:bg-white dark:text-black absolute z-40 w-full -top-99 md:-top-60 bg-black rounded-2xl p-8 shadow-lg'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0'>
        {/* Heading */}
        <h3 className='text-4xl md:text-[65px] md:w-[80%] leading-tight font-extrabold text-center md:text-left'>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <div className='flex flex-col gap-3 md:w-[20%] '>
          <input
            type='email'
            placeholder='Enter your email'
            className='bg-white dark:bg-black dark:text-white  rounded-full text-black outline-none px-4 py-3 '
          />

          <button
            type='submit'
            className='bg-white dark:bg-black dark:text-white text-black rounded-full px-6 py-3 text-[14px] font-bold'
            >
            Subscribe to Newsletter
          </button>
        </div>
        </div>
      </div>
  );
};

export default NewsLetter;