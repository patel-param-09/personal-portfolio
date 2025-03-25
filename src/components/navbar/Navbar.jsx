import React from "react";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <span>
          {/* <img src="/logo (2).png" alt="" className="logo-img" /> */}
        </span>
        <div className="social">
          <a href="https://www.linkedin.com/in/patel-param/" target="_blank">
            <img src="/linkdin.png" alt="" className="social-img" />
          </a>
          <a href="https://github.com/patel-param-09" target="_blank">
            <img src="/github.png" alt="" className="github-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
