import React from "react";
import { Outlet } from "react-router-dom";
import "../App.modules.css";
import { logo, sun } from "../assets/images";

const Background = () => {
  return (
    <div className="background">
      <img src={logo} alt="LUID Kapampangan" className="logo" />
      <img src={sun} className="sun" />
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default Background;