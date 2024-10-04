"use client";
import React, { useRef } from "react";
import RightArrow from "../svg/RightArrow";
import Link from "next/link";
import ProductCard from "../global_ui/ProductCard";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 21, 13, 14, 15, 16, 17, 18, 19, 20,
];
export default function SaleYouMAyLike({ children }) {
  //   product you may like component
  return (
    <div className="w-full h-auto flex flex-col   rounded-md border border-gray-50">
      {/* section hearder */}
      <div className=" flex justify-between flex-row items-center p-1 px-2 bg-[#eeeaea]">
        <h2 className="font-semibold text-lg p-2 pl-4 text-gray-800 uppercase">
          Other Product Your May Like
        </h2>
        <Link
          href="#"
          className="text-gray-600  bg-transparent  font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  "
        >
          Read more
          <RightArrow />
        </Link>
      </div>

      {/* psection list wrapper */}
      <div className="bg-white flex flex-grow h-full justify-center space-x-2  items-center group/item flex-row">
        <div className="flex  items-center gap-y-[10px] gap-x-3 flex-wrap justify-center justify-items-center md:grid md:grid-cols-[repeat(auto-fill,minmax(270px,1fr))] w-full mb-2 ml-0">
          {data.map((i, l) => (
            <ProductCard key={1} />
          ))}
        </div>
      </div>
    </div>
  );
}
