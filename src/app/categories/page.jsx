import React from "react";

const CategoryPage = () => {
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
    <div className="bg-gray-100 py-12 mt-20 rounded-xl">
      <h2 className="text-5xl font-bold text-gray-900 mb-10 text-center">
        Browse Categories
      </h2>
      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {categories.map((category, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-80 object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-4xl font-bold text-white">{category.name}</h3>
              <p className="text-gray-300 text-lg mt-2">
                {category.description}
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-500 transition-colors">
                Explore {category.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
