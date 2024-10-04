import React from "react";

const CategoryGrid = () => {
  const categories = [
    { name: "Music", color: "bg-rose-300" },
    { name: "Photography", color: "bg-teal-400" },
    { name: "Shopping", color: "bg-orange-300" },
    { name: "Gifts", color: "bg-lime-300" },
    { name: "Sports", color: "bg-teal-700" },
    { name: "Books", color: "bg-emerald-300" },
    { name: "Games", color: "bg-fuchsia-500" },
    { name: "Religion", color: "bg-slate-500" },
    { name: "Cars", color: "bg-sky-300" },
    { name: "Crafts", color: "bg-blue-400" },
    { name: "Gadgets", color: "bg-amber-400" },
    { name: "Art & Design", color: "bg-cyan-500" },
  ];

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        All Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`rounded-lg p-8 ${category.color} text-white flex items-center justify-center h-40 transition-transform transform hover:scale-105`}
          >
            <span className="text-xl font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryGrid;
