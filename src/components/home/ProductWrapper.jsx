"use client";
import React, { useRef } from "react";
import RightArrow from "../svg/RightArrow";
import Link from "next/link";
import { ChevronLeftIcon } from "../svg/ChevronLeft";
import { ChevronRightIcon } from "../svg/ChevronRight";

export default function ProductWrapper({ children, title, link = "#" }) {
  // wrapper with list of cards
  const container_div = useRef();

  const handleClick = (side) => {
    //   moves the scroll positon of the container_div
    let num;
    const element = container_div;
    if (side === "forword") {
      num = +1350;
    } else {
      num = -1350;
    }

    // moves the scroll position forward or backward
    element.current.scrollBy({
      top: 0,
      left: num,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full h-auto flex flex-col   rounded-md border border-gray-50">
      {/* section hearder */}
      <div className=" flex justify-between flex-row items-center p-1 px-2 bg-[#eeeaea]">
        <h2 className="font-semibold text-lg p-2 pl-4 text-gray-800 uppercase">
          {title}
        </h2>
        <Link
          href={link}
          className="text-gray-600  bg-transparent  font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  "
        >
          Read more
          <RightArrow />
        </Link>
      </div>

      {/* psection list wrapper */}
      <div className="bg-white flex flex-grow h-full justify-start space-x-2  items-center group/item flex-row">
        <div className={"relative overflow-x-scroll "}>
          <div
            className={
              "arrow left-0 opacity-0 hover:opacity-100 group-hover/item:opacity-60 "
            }
          >
            <ChevronLeftIcon
              className="w-10 text-white"
              onClick={() => handleClick("back")}
            />
          </div>

          <div
            className=" overflow-x-scroll  w-full xl:max-w-[1300px] flex flex-row space-x-1 "
            ref={container_div}
          >
            {/* content */}
            {children}
          </div>
          <div
            className={
              "arrow right-0 opacity-0 hover:opacity-100 group-hover/item:opacity-60"
            }
          >
            <ChevronRightIcon
              className="w-10 text-white"
              onClick={() => handleClick("forword")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
