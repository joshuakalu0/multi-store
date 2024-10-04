import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";
import Link from "next/link";
import { ShoppingBagOutlined } from "@mui/icons-material";

export default function Dropdown() {
  return (
    <div className="absolute top-[55px] z-20 min-w-[190px] w-auto p-4  rounded-2xl max-w-auto h-auto bg-white flex justify-center items-center flex-col  toottip-arrow shadow-lg">
      <Link href="/auth/login" class="signin">
        <button className=" text-white hover:text-black bg-black hover:bg-gray-100 border-black border-2 flex justify-center px-[15px] min-w-[150px] items-center py-2 text-sm rounded-3xl">
          Sign in
        </button>
      </Link>
      <Link href="/auth/register" class="register">
        <button className=" flex justify-center items-center  py-2 text-[.8rem] hover:bg-gray-100 px-[15px] min-w-[150px] rounded-3xl mt-3 mb-2 hover:font-semibold">
          Create account
        </button>
      </Link>
      <div className="w-[100%] h-[1px]  bg-gray-700"></div>
      <div className="flex w-full justify-start flex-col pt-2 space-y-1">
        <Link href="/profile">
          <p className="py-2 font-normal text-sm hover:bg-gray-100 rounded-full pl-2 cursor-pointer hover:font-semibold">
            <PersonOutlineOutlinedIcon className="w-5 mr-2" />
            My Account
          </p>
        </Link>
        <p className="py-2 font-normal text-sm hover:bg-gray-100 rounded-full pl-2 cursor-pointer hover:font-semibold">
          <FavoriteBorderOutlinedIcon className="w-5 mr-2" />
          Saved Items
        </p>
        <p className="py-2 font-normal text-sm hover:bg-gray-100 rounded-full pl-2 cursor-pointer hover:font-semibold">
          <ShoppingBagOutlined className="w-5 mr-2" /> Orders
        </p>
      </div>
    </div>
  );
}
