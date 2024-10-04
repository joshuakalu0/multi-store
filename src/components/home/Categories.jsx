import Image from "next/image";
import Link from "next/link";
import RightArrow from "../svg/RightArrow";

export default function Categories() {
  return (
    <div className="w-full h-[260px] flex flex-col   rounded-md border border-gray-50">
      <div className=" flex justify-between flex-row items-center p-1 px-2 bg-[#eeeaea]">
        <h2 className="font-semibold text-lg p-2 pl-4 text-gray-800 uppercase">
          Categories
        </h2>
        <Link
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <RightArrow />
        </Link>
      </div>
      <div className="bg-white flex min-h-[250px] flex-grow h-full justify-start overflow-x-scroll space-x-2 p-2 items-center flex-row">
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
      </div>
    </div>
  );
}

const SingleCategory = () => {
  return (
    <div className="min-w-[150px] bg-transparent pb-0 hover:shadow-sm hover:scale-[1.03] p-1 flex justify-center items-center flex-col ">
      <div>
        <Image
          src="/timg.jpg" // Replace with your image URL
          height={1000}
          width={1000}
          alt="Category item"
          className="w-full h-[200px] object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold">Computer</h3>
    </div>
  );
};
