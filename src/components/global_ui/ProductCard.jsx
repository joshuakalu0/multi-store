import React from "react";
import { HeartIcon } from "../svg/Heart";

export default function ProductCard() {
  return (
    <div className="relative w-full min-w-[250px] max-w-[270px] border rounded-lg p-4 shadow-lg">
      {/* Image section */}
      <div className="mb-4 relative">
        <img
          className="w-full h-auto rounded-lg"
          src="/timg.jpg"
          alt="T-shirt and Shorts Set"
        />
        {/* Wishlist Icon */}
        <div className="absolute bottom-3 bg-gray-100 rounded-full p-1 right-3">
          <HeartIcon className="w-5" />
        </div>
      </div>

      {/* Product details section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700">
          T-Shirts + Shorts 100% Cotton Mens Short Sleeve Set-White
        </h3>

        {/* Price Section */}
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-orange-500">
            <sup>₦</sup>9,203
          </span>
          <span className="text-sm text-gray-500 line-through ml-2">
            <sup>₦</sup>10,592
          </span>
          <span className="text-sm text-orange-500 ml-2">-13%</span>
        </div>

        {/* Rating Section */}
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <span className="text-yellow-400">★★★★☆</span>
          <span className="ml-2">(996)</span>
        </div>
      </div>
      {/* add to chart button */}
      <div className="w-full flex justify-center items-center pt-3">
        <button class="px-6 py-1 transition ease-in duration-200 uppercase rounded-xl hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
  );
}
