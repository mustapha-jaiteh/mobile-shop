import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full lg:h-28 w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
        <h1 className="text-4xl font-bold capitalize lg:pl-8 pl-12 text-gray-200  mt-8  ">
          ONLINE MOBILE SHOP
        </h1>
        <div className="page-links ml-6 grid-cols-2 lg:grid-cols-2">
          <ul className="grid  gap-2  text-gray-100 font-bold grid-col-1 lg:grid-flow-col right-28 mt-4 w-[70%]">
            <li className=" hover:text-black focus:ring focus:ring-violet-300">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-black focus:ring focus:ring-violet-300">
              <Link to={"/about"}>About </Link>
            </li>
            <li className="hover:text-black active:text-black">
              <Link to={"/products"}>Products</Link>
            </li>
            <li className="hover:text-black active:text-black">
              <Link to={"/contacts"}>Contact</Link>
            </li>
          </ul>
          <Link to={"/products"}>
            <button className=" bg-pink-600 rounded-3xl border-gray-300 shadow-md absolute w-16 lg:w-32 h-12 text-gray-100 mt-3 lg:mt-2 ml-6 right-4 ">
              Place an order
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
