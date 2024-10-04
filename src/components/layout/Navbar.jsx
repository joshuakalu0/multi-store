// Import necessary components and libraries
"use client";
import Image from "next/image";

import Navoption from "./Navoption";
import { Dehaze } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavSideBar from "./NavSidebar";

// Define the Nav component
export default function Nav() {
  // Initialize state variables to track toggle and search active states
  const [toggle, settoggle] = useState(false);
  const [searchActive, setsearchActive] = useState(false);

  // Use effect hook to add or remove overflow-y-hidden class from body based on toggle state
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [toggle]);

  // Return the JSX for the Nav component
  return (
    // Container div with relative positioning
    <div className="relative">
      {/* Navigation bar with fixed position and z-index */}
      <nav className="md:h-[70px]  w-full search-shadow bg-white flex flex-col fixed top-0 z-10 ">
        {/* Inner container with max-width and horizontal padding */}
        <div className="h-[70px] w-full flex max-w-[1350px] justify-between items-center sm:item-center sm:justify-start md:justify-between sm:pl-[10px] md:pl-0  mx-auto">
          {/* Left side of navigation bar with logo and hamburger menu */}
          <div className="flex items-center justify-center sm:justify-start flex-row h-[80px] md:mr-8">
            {/* Hamburger menu icon */}
            <div
              className="flex items-center justify-end h-full lg:d-none pl-5 pr-4 cursor-pointer"
              onClick={() => settoggle(true)}
            >
              <Dehaze />
            </div>
            {/* Logo */}
            <Link href="/">
              <h3 className="text-2xl font-semibold flex justify-start lg:ml-3 mr-3 md:mr-0">
                My Store
              </h3>
            </Link>
          </div>
          {/* Middle section of navigation bar */}

          {/* Right side of navigation bar with Navoption component */}
          <div className="flex items-center h-full w-auto md:ml-3 md:pr-5 lg:ml-10">
            <Navoption />
          </div>
        </div>
      </nav>

      {/* Conditionally render sidebar and SmallScreenSearch components */}
      {toggle && <NavSideBar activefun={settoggle} />}
      {/* {searchActive && <SmallScreenSearch setsearch={setsearchActive} />} */}
    </div>
  );
}
