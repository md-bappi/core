import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto w-screen h-10 bg-gray-900 text-gray-50 flex justify-between items-center">
      <div className="nav-log flex justify-center items-center">
        <img
          src="https://i.imgur.com/L0z4HuS.png"
          alt="log-image"
          className=" w-5 h-5"
        />
        <h2 className=" text-xl">Core</h2>
      </div>
      <ul className=" hidden">
        <li>
          <NavLink>Demo</NavLink>
        </li>
        <li>
          <NavLink>About Us</NavLink>
        </li>
        <li>
          <NavLink>Pages</NavLink>
        </li>
        <li>
          <NavLink>Blog</NavLink>
        </li>
        <li>
          <NavLink>Contact Us</NavLink>
        </li>
      </ul>
      <Link className="hidden">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
