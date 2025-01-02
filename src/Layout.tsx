import React from "react";
import { Link } from "react-router-dom";
import Logo from "../public/logo.png";
import { Outlet } from "react-router-dom";
import "./index.scss";

const Layout = () => {
  return (
    <>
      <div className="title-bg w-100 d-flex justify-content-center align-items-center py-4 bg-green text-white">
        <img
          src={Logo}
          alt="logo"
          className="me-3"
          style={{ width: "50px", height: "50px" }}
        />
        <h2 className="mb-0">CATHAY REACT TEST</h2>
      </div>

      <Outlet />
      <Link to="/" className="home-page-btn">
        HOME
      </Link>
    </>
  );
};

export default Layout;
