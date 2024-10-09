"use client";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";

const category = [
  {
    name: "phone",
    qty: 38,
  },
  {
    name: "phone",
    qty: 38,
  },
  {
    name: "phone",
    qty: 38,
  },
  {
    name: "phone",
    qty: 38,
  },
  {
    name: "phone",
    qty: 38,
  },
];

const FilterContent = () => {
  // diffrent section state
  const [isOpen, setIsOpen] = useState({
    category: true,
    size: false,
    price: false,
    rating: false,
  });

  // expand different section
  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="space-y-6 bg-transparent">
      {/* Filter Category Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <h4 className="font-semibold text-lg">Category</h4>
          {isOpen.category ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </div>
        {isOpen.category && (
          <ul className="mt-4 space-y-2">
            {category.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={item.name}
                    className="form-checkbox"
                  />
                  <span>{item.name}</span>
                </label>
                <span className="text-gray-500">({item.qty})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Size Filter Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("size")}
        >
          <h4 className="font-semibold text-lg">Size</h4>
          {isOpen.size ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </div>
        {isOpen.size && (
          <div className="mt-4 flex flex-nowrap space-x-2">
            {["S", "M", "L", "XL", "2XL"].map((size, index) => (
              <button
                key={index}
                className="px-2 py-1 text-sm rounded-lg border hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h4 className="font-semibold text-lg">Price Range</h4>
          {isOpen.price ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </div>
        {isOpen.price && (
          <div className="mt-4">
            <input type="range" min="0" max="1500" className="w-full" />
            <div className="flex justify-between mt-2">
              <span>$0</span>
              <span>$1500</span>
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("rating")}
        >
          <h4 className="font-semibold text-lg">Rating</h4>
          {isOpen.rating ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </div>
        {isOpen.rating && (
          <ul className="mt-4 space-y-2">
            {[5, 4, 3, 2, 1].map((stars, index) => (
              <li key={index} className="flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={
                          i < stars ? "text-yellow-500" : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterContent;
