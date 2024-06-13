import React from "react";
import Icons from "./Icons";

const footer = () => {
  return (
    <div className="footer w-full h-full lg:h-[400px] bg-[#2f3133] text-gray-100 text-3xl content-center grid grid-cols-1 lg:grid-cols-2 ">
      <div className="footer-1  h-full relative">
        <div className="circle bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl w-full h-full absolute  z-0 opacity-10"></div>
        <h4 className="text-4xl font-bold mt-8 ml-10 mr-16 z-20 ">
          We have stores in all major towns:
        </h4>
        <p className="text-lg mt-4 ml-10 mb-10 mr-16 z-20">
          Banjul <br />
          Serrekunda <br />
          Westfield <br />
          Brikama <br />
          We offer free delivery for our online customers.
        </p>
        <p className="font-mono text-2xl mt-4 ml-10 mb-10 mr-16">
          All &copy;copyright@mustech.com
        </p>
      </div>
      <div className="footer-2 h-full relative">
        <div className="circle bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl w-full h-full absolute z-0 opacity-10"></div>
        <Icons />
      </div>
    </div>
  );
};

export default footer;
