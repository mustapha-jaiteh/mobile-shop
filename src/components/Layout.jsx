import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      {/* <div>{children}</div> */}
    </>
  );
};

export default Layout;
