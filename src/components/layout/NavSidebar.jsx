"use client";
import { Close, KeyboardArrowRight, ShoppingCart } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";

const NavSideBar = ({ activefun }) => {
  // const handleClick = ()=>{
  //   document.body.className('overfow-y-hidden')
  // }
  const blackspot = useRef();
  useEffect(() => {
    blackspot.current.addEventListener("click", () => {
      document.body.classList.remove("overfow-y-hidden");
      activefun(false);
    });
  }, []);

  return (
    // <div className='h-[100vh] w-[100vh] fixed top-0 bg-red-900 z-[999] opacity-[.8] hidden'>
    <div className="h-[100vh] w-[100vw] bg-[#00000059] fixed top-0 bg-transparent-black z-[999] lg:hidden flex flex-nowrap flex-row">
      <div className="h-[100vh] w-[80vw] fixed top-0 bg-transparent-white z-[999] overflow-scroll">
        <div className="sticky top-0 min-h-screen bg-white">
          <div className="h-[70px]  flex items-center pl-5 border-bb">
            <Close
              onClick={() => activefun(false)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="overflow-scroll min-h-screen"></div>
      </div>
      <div
        className="h-[100vh] w-[20vw] fixed top-0  right-0  z-[9999] overflow-scroll"
        ref={blackspot}
      ></div>
    </div>
  );
};

export default NavSideBar;
