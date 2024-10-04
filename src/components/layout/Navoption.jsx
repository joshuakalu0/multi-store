"use client";
import {
  HelpOutlineOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

import Dropdown from "./ProfileDropDown";

export default function Navoption() {
  const [toggle, settoggle] = useState(false);
  const [match, setmatch] = useState(true);

  useEffect(() => {
    const Mquery = window.matchMedia("(min-width: 768px)");
    setmatch(Mquery.matches);
    Mquery.onchange = (e) => {
      setmatch(e.target.matches);
    };
    document.body.onclick = (ev) => {
      settoggle(null);
    };
  }, []);

  const handletoggle = (data) => {
    if (data === toggle) {
      settoggle(null);
    } else {
      settoggle(data);
    }
  };
  return (
    <div className="flex justify-center items-center w-full space-x-4  md:space-x-7 lg:space-x-16">
      <div className="navbar__item cursor-pointer relative">
        <div className="navbar__item" onClick={() => handletoggle(!toggle)}>
          <PersonOutlineOutlined className="text-gray-800 mr-2 " />
          <p className="cursor-pointer d-none md:flex">Account</p>
          {/* {match == true && <p>hd</p>} */}

          {match &&
            (toggle === true ? (
              <KeyboardArrowUp className="ml-1  md:flex" />
            ) : (
              <KeyboardArrowDown className="ml-1  md:flex" />
            ))}
        </div>

        {toggle === true ? <Dropdown className="ml-1" /> : null}
      </div>
      <div className="navbar__item cursor-pointer relative">
        <div className="navbar__item">
          <HelpOutlineOutlined className="text-gray-800 mr-2" />
          <p className="d-none md:flex">Help</p>
        </div>
      </div>
      {match && (
        <div className="navbar__item cursor-pointer relative">
          <div className="navbar__item">
            <ShoppingCartOutlined className="text-gray-800 mr-2 hidden md:flex" />
            <p className="d-none md:flex">Cart</p>
          </div>
        </div>
      )}
    </div>
  );
}
