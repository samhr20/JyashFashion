import React from 'react';

const ReviewCard = (props) => {
  return (
    <div className="border bg-[#F2F0F1] text-black border-gray-300  p-5 rounded-3xl md:rounded-2xl shadow-md w-full max-w-[320px] md:w-8xl ">
      <p className="">⭐⭐⭐⭐</p>
      <h3 className="font-bold my-2 md:text-[28px] text-2xl">{props.name}</h3>
      <p className="text-gray-500 text-sm">{props.review}</p>
    </div>
  );
};

export default ReviewCard;
