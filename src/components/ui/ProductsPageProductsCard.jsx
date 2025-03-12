import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPageProductsCard = ({id , name, actualPrice, discountedPrice, image , addToCart }) => {
  return (
    <div className="p-3  text-black bg-gradient-to-r from-[#F2F0F1] to-[#E0E7FF] border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <Link to={`/products/${name}`}>
        <div className='flex items-center justify-center'>
      <img src={image} alt={name} className=" h-56 object-contain rounded-2xl  " />
        </div>
      <h3 className="mt-2 text-lg truncate overflow-hidden whitespace-nowrap font-semibold">{name}</h3>
      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-500 line-through">₹{actualPrice}</p>
        <p className="text-red-500 font-bold">₹{discountedPrice}</p>
      </div>
        </Link>
      <button
       onClick={()=>addToCart(id , name , discountedPrice)}
      className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">Add to Cart</button>
    </div>
  );
};

export default ProductsPageProductsCard;