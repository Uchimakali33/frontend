import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logodark from "../../assets/shopping-cart-light.png";
import logolight from "../../assets/shopping-cart-dark.png";
import searchlight from "../../assets/search-light.png";
import searchdark from "../../assets/search-dark.png";
import toggledark from "../../assets/night-mode.png";
import togglelight from "../../assets/light-mode.png";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const bgcolor = theme == "dark" ? "bg-white" : "bg-black";

  const textcolor = theme == "dark" ? "text-black" : "text-white";
  const searchbgcolor = theme == "dark" ? "bg-black" : "bg-white";
  const searchtextcolor = theme == "dark" ? "text-white" : "text-black";
  const libgcolor = theme == "dark" ? "hover:bg-black" : "hover:bg-white";
  const litextcolor = theme == "dark" ? "hover:text-white" : "hover:text-black";

  return (
    <>
      <div className={`${bgcolor} transition duration-300 pt-3 w-full`}>
        <div
          className={`flex ${textcolor} transition duration-300 py-2 w-full md:flex justify-evenly items-center`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
          <div className="flex gap-2 font-bold text-mono text-lg shrink:min-w-100 self-end">
            <FaShoppingCart className="w-6 h-6" />
            <h1 className={`font-bold`}>ShopNow</h1>
          </div>

          <ul className="hidden md:flex gap-6 font-bold font-mono text-xl cursor-pointer">
            <li
              className={`${libgcolor} ${litextcolor} transition duration-200 px-2 rounded-lg`}
            >
              Home
            </li>
            <li
              className={`${libgcolor} ${litextcolor} transition duration-200 px-2 rounded-lg`}
            >
              Products
            </li>
            <li
              className={`${libgcolor} ${litextcolor} transition duration-200 px-2 rounded-lg`}
            >
              Features
            </li>
            <li
              className={`${libgcolor} ${litextcolor} transition duration-200 px-2 rounded-lg`}
            >
              About
            </li>
          </ul>

          <div
            className={`hidden md:flex items-center ${searchbgcolor} ${searchtextcolor} transition duration-300 rounded-2xl px-2 py-1 gap-2`}
          >
            <input
              className="focus:outline-none font-medium"
              type="text"
              placeholder="Search"
            />
            <FaSearch className="w-4 h-4" />
          </div>

          <MdLightMode
            className="w-7 h-7 hover:scale-105 transition duration-200"
            onClick={toggle_mode}
          />
          <div
            className={`md:hidden ${isOpen ? "block" : "hidden"} rounded-xl absolute left-0 top-12 w-35 p-4 z-40 ${bgcolor}`}
          >
            <ul className="flex flex-col space-y-4 font-bold font-mono text-xl cursor-pointer">
              <li
                className={`${libgcolor} ${litextcolor} transition duration-200 px-2 rounded-lg`}
              >
                Home
              </li>
              <li
                className={`${libgcolor} ${litextcolor} transition duration-200 px-2 rounded-lg`}
              >
                Products
              </li>
              <li
                className={`${libgcolor} ${litextcolor} transition duration-200 px-2 rounded-lg`}
              >
                Features
              </li>
              <li
                className={`${libgcolor} ${litextcolor} transition duration-200 px-2 rounded-lg`}
              >
                About
              </li>
              <li>
                <div
                  className={`flex md:hidden items-center ${searchbgcolor} ${searchtextcolor} transition duration-300 rounded-2xl px-2 py-1 gap-2`}
                >
                  <input
                    className="focus:outline-none font-medium"
                    type="text"
                    placeholder="Search"
                  />
                  <FaSearch className="w-5 h-5" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
