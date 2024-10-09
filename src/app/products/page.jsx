"use client";
import ProductCard from "@/components/global_ui/ProductCard";
import FilterContent from "@/components/products/FilterContent";
import { FilterComponent } from "@/components/products/filters";
import { Filter, Tune } from "@mui/icons-material";
import React, { useState } from "react";

const EcommercePageWithFilter = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  const products = Array.from({ length: 12 }, (_, index) => ({
    name: `Dell e6430 i7`,
    price: "$250",
    rating: "5.0",
    reviews: "10 reviews",
    image: "/ppc.png",
  }));

  return (
    <div className="bg-gray-100 min-h-screen p-4 mt-20 lg:flex lg:space-x-6">
      {/* Side Filter Visible on large screens */}
      <div className="hidden lg:block w-1/4 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Filters</h3>
        {/*  filter  */}
        <FilterContent />
      </div>

      {/* Filter Button and Modal (Visible on small screens) */}
      <button
        onClick={toggleFilter}
        className="lg:hidden flex items-center justify-center bg-blue-500 text-white w-12 h-12 rounded-full fixed bottom-6 right-6 shadow-lg hover:bg-blue-600 transition"
      >
        <Tune size={20} />
      </button>

      {/* Filter Modal */}
      {isFilterOpen && <FilterComponent toggleFilter={toggleFilter} />}

      {/* Product Section */}
      <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:mt-0">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EcommercePageWithFilter;
