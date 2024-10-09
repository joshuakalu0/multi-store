import { ArrowForwardRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const CategorySection = () => {
  const categories = [
    {
      name: "laptop",
      description: "Dell, HP, Acer..",
      image: "/pc.png",
    },
    {
      name: "speaker",
      description: "JBL, Samsung, Sony",
      image: "/speaker.png",
    },
    {
      name: "Phones",
      description: "Iphone,Samsung,Tecno",
      image: "/phones.png",
    },
    {
      name: "Headphones",
      description: "Itel,JBL,Iphone...",
      image: "/headphone.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 pb-4 px-4 lg:px-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Explore Our Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              width={200}
              height={200}
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {category.name}
              </h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* view more button */}
      <div className="w-full flex justify-end items-center mt-4">
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          View All <ArrowForwardRounded />
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
