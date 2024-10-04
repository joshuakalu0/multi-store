"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const ScrollImage = () => {
  const [imageSize, setImageSize] = useState(500); // Initial size of the image
  const [topOffset, setTopOffset] = useState(50);
  const [leftOffset, setLeftOffset] = useState(0);
  const image = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const imgElement = image.current;

      const scrollY = window.scrollY;

      // Calculate new image size, stopping at 50px
      const newSize = Math.max(50, 400 - scrollY / 2); // Adjusts the rate of shrinking

      // Adjust the top and left offsets (move left as scroll happens)
      const newTopOffset = Math.min(50, scrollY / 4); // Stops at 100px from top
      const newLeftOffset = Math.min(0, scrollY / 2); // Moves 100px to the left
      imgElement.style.width = newSize;
      setImageSize(newSize);
      setTopOffset(newTopOffset);
      setLeftOffset(newLeftOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full justify-center items-center flex-row">
      <div className=" p-10">
        <Image
          src="/timg.jpg"
          ref={image}
          height={1000}
          width={1000}
          alt="company logo"
          className="min-w-[500px]"
          // style={{
          //   width: `${imageSize}px`, // The width is reduced
          //   height: "auto",
          //   position: "fixed",
          //   top: `${topOffset}px`,
          //   left: `${leftOffset}px`,
          //   transition: "width 0.2s ease, top 0.2s ease, left 0.2s ease",
          // }}
        />
      </div>
      <div className="flex flex-grow flex-col">
        <h2 className="text-6xl font-bold pb-2">CEO Electronic Store, Lagos</h2>
        <p className="">
          vision is moving yeah and your also part of it Scroll down to see the
          image shrink and move to the top left corner. Scroll down to see the
          image shrink and move to the top left corner. Scroll down to see the
          image shrink and move to the top left corner. Scroll down to see the
          image shrink and move to the top left corner. Scroll down to see the
          image shrink and move to the top left corner. Scroll down to see the
          image shrink and move to the top left corner. Scroll down to see the
          image shrink and move to the top left corner.
        </p>
      </div>
    </div>
  );
};
export default ScrollImage;
