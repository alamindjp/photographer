import React from "react";
import "./Header.css"
import img from "./image/4044(1).png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid bg-primary py-3 mb-2">
      <nav className="d-flex">
        <div>
          <img className="logo-img" src={img} alt="" />
        </div>
        <div className="">
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blogs">Blogs</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">About</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
