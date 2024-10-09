import React from "react";
import { ArrowForwardRounded } from "@mui/icons-material";
import Link from "next/link";

export default function SectionWrapper({
  children,
  header,
  subhead,
  logo,
  description,
  link = "#",
}) {
  return (
    <div className="bg-gray-50 rounded-2xl py-12 px-4 lg:px-16">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        {header}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Highlighted  Card */}
        <div className="bg-blue-600 text-white rounded-xl p-6 flex flex-col justify-between hover:bg-blue-500 transition-colors duration-300">
          <div className="mb-4">
            <h3 className="text-3xl font-semibold">{subhead}</h3>
            <p className="mt-2 text-lg">{description}</p>
          </div>
          <img
            src={logo}
            alt="Discount Product"
            className="h-32 object-contain mb-6"
          />
          <div className="w-full flex justify-end">
            <Link
              href={link}
              className="bg-white text-blue-600 rounded-full float-right p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-200"
            >
              <ArrowForwardRounded className="-rotate-45" />
            </Link>
          </div>
        </div>

        {/* Product Cards */}
        {children}
      </div>
    </div>
  );
}
