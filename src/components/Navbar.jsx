import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" bg-gray-900 text-gray-50">
      <div className="container mx-auto w-screen h-16 flex justify-between items-center px-1 lg:px-10 lg:h-20">
        <div className="nav-lef flex justify-center items-center gap-32">
          <div className="nav-log flex justify-center items-center">
            <img
              src="https://i.imgur.com/L0z4HuS.png"
              alt="log-image"
              className=" w-5 h-5 lg:w-6 lg:h-6"
            />
            <Link to="/" className=" text-xl uppercase lg:text-2xl">
              Core
            </Link>
          </div>

          <ul className="nav-links hidden lg:flex items-center gap-5 text-lime-50">
            <li className="p-1">
              <NavLink
                to="/"
                className="flex justify-center items-center gap-1 "
              >
                Demo
                <span className=" text-sm">
                  <IoIosArrowDown />
                </span>
              </NavLink>
            </li>
            <li className="p-1">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="p-1">
              <NavLink
                to="/"
                className="flex justify-center items-center gap-1"
              >
                Pages
                <span className=" text-sm">
                  <IoIosArrowDown />
                </span>
              </NavLink>
            </li>
            <li className="p-1">
              <Link
                to="blog"
                className="flex justify-center items-center gap-1"
              >
                Blog
                <span className=" text-sm">
                  <IoIosArrowDown />
                </span>
              </Link>
            </li>
            <li className="p-1">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-right flex justify-center items-center gap-20">
          <Link
            to="/contact"
            className="contact-us hidden sm:block bg-lime-400 text-gray-950 font-semibold px-2 py-1 rounded-2xl border-2 border-gray-950"
          >
            Contact Us
          </Link>

          <span className=" text-4xl lg:hidden">
            <IoReorderThreeOutline />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
