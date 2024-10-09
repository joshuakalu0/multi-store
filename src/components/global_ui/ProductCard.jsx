import React from "react";
import { HeartIcon } from "../svg/Heart";
import { ShoppingCart } from "@mui/icons-material";

export default function ProductCard({ discount = false, product }) {
  return (
    <div className="bg-white min-w-[220px] hover:bg-gray-100 rounded-xl shadow-lg p-4 pt-1 flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="h-1/2 w-ful justify-center items-center relative pb-2">
        {/* Wishlist Icon */}
        <div className="self-end absolute right-3 top-10 hover:bg-[#e2e2e2] rounded-full p-1  text-red-500 hover:text-red-700 cursor-pointer mb-4">
          <HeartIcon className="w-6" />
        </div>
        {/* Discount Badge */}
        {discount == true && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
            80% OFF
          </div>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain mb-4"
        />
      </div>
      <div className="h-1/2 w-ful justify-end flex-col items-end">
        {/* Product Info */}
        <h3 className="text-gray-800 font-bold text-sm mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm">
          Rating:<span className="text-yellow-400">★★★★☆</span> {product.rating}{" "}
          ({product.reviews})
        </p>
        {/* Price Section */}
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-orange-500">
            <sup>₦</sup>
            {product.price}
          </span>
          <span className="text-sm text-gray-500 line-through ml-2">
            <sup>₦</sup>10,592
          </span>
          <span className="text-sm text-orange-500 ml-2">-13%</span>
        </div>

        {/* Cart Button */}
        <div className="mt-auto">
          <button className="w-full bg-blue-600 text-white rounded-lg py-2 mt-4 hover:bg-blue-700">
            <ShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
