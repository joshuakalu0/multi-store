import {
  ArrowForwardRounded,
  ArrowRight,
  CardTravel,
  ShoppingCart,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeartIcon } from "../svg/Heart";
import ProductCard from "../global_ui/ProductCard";

export default function SaleMayLike({ discount = false }) {
  const products = [
    { name: "displayer" },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
    {
      name: "Lenove",
      price: "$250",
      rating: "5.0",
      reviews: "10 reviews",
      image: "/ppc.png",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl py-12 px-4 lg:px-16">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Other Product you may like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product, index) => {
            if (product.name == "displayer") return <Displayer key={index} />;
            return <ProductCard product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Displayer = () => {
  return (
    <div className="bg-blue-600 flex-shrink text-white rounded-xl p-6 flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">Other Product</h2>
        <p className="text-lg mt-2">
          Check out other product that you may like
        </p>
      </div>
      {/* view more arrow */}
      <div className="w-full flex justify-end">
        <Link
          href="#"
          className="bg-white text-blue-600 rounded-full float-right p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-200"
        >
          <ArrowForwardRounded className="-rotate-45" />
        </Link>
      </div>
    </div>
  );
};
