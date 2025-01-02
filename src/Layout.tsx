import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h2 className="w-100 text-center py-4 bg-green text-white position-fixed top-0">
        CATHAY REACT TEST
      </h2>
      <Outlet />
    </>
  );
};

export default Layout;
