import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Icons = () => {
  return (
    <div className="flex flex-col space-x-4 absolute p-8 gap-6 ">
      <h4 className=" font-bold text-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-lg">
        We are available on all social media platforms
      </h4>
      <a
        href="https://whatsapp.com"
        className="text-green-600 text-3x hover:text-green-800 grid grid-cols-2 "
      >
        <FaWhatsapp className="w-8 h-8 " />
        <p className="">WhatsApp</p>
      </a>
      <a
        href="https://facebook.com"
        className="text-blue-600 text-3xl hover:text-blue-800 grid grid-cols-2"
      >
        <FaFacebook className="w-8 h-8 " />
        <p className="">Facebook</p>
      </a>
      <a
        href="https://twitter.com"
        className="text-blue-400 text-3xl hover:text-blue-600 grid grid-cols-2"
      >
        <FaTwitter className="w-8 h-8" />
        <p className="">Twitter</p>
      </a>
      <a
        href="https://instagram.com"
        className="text-pink-500 text-3xl hover:text-pink-700 grid grid-cols-2"
      >
        <FaInstagram className="w-8 h-8" />
        <p className="">Instagram</p>
      </a>
      <a
        href="https://linkedin.com"
        className="text-blue-700 text-3xl hover:text-blue-900 grid grid-cols-2"
      >
        <FaLinkedin className="w-8 h-8" />
        <p className="">LinkedIn</p>
      </a>
    </div>
  );
};

export default Icons;
