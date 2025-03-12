import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ name, image, actualPrice, discountedPrice, addToCart, id }) => {
  return (
    <div className="max-w-sm p-3 border  text-black bg-gradient-to-r from-[#F2F0F1] to-[#E0E7FF] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Product Image */}
      <Link to={`/products/${name}`} className="block overflow-hidden relative">
        <div className="h-96 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-3xl transition-transform duration-300 hover:scale-110"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="max-w-[320px] p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 truncate whitespace-nowrap overflow-hidden">
          {name}
        </h2>
        <div className="flex items-center mt-2">
          <span className="text-red-500 line-through mr-2">₹{actualPrice}</span>
          <span className="text-black font-bold text-xl">₹{discountedPrice}</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(id, name, discountedPrice)}
        className="mt-3 w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductsCard;