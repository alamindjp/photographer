import React from "react";
import logo from "./image/4044(1).png"
import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid bg-primary py-3">
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blogs">Blogs</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
