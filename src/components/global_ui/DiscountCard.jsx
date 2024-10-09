import React from "react";
import { HeartIcon } from "../svg/Heart";
import { ShoppingCart } from "@mui/icons-material";

export default function DiscountProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:bg-gray-100 transition-shadow duration-300 relative">
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
        {product.discount} OFF
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-contain mb-4"
      />

      {/* Product Info */}
      <h3 className="text-gray-800 font-semibold text-lg mb-2">
        {product.name}
      </h3>
      <div className="flex items-center justify-between text-gray-600">
        <div>
          <p className="line-through">{product.originalPrice}</p>
          <p className="text-xl font-bold text-gray-800">
            {product.discountPrice}
          </p>
        </div>
        <div className="text-sm">
          <p>{product.rating} </p>
          <span className="text-yellow-400">★★★★☆</span>
          <p>({product.reviews})</p>
        </div>
      </div>

      {/* Cart Button */}
      <button className="w-full bg-blue-600 text-white rounded-lg py-2 mt-4 hover:bg-blue-700 transition-colors duration-300">
        <ShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}
