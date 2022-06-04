import React from "react";
import "./Header.css"
import img from "./image/4044(1).png";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user]=useAuthState(auth)
  const handleSignOut = ()=>{
    signOut(auth)
  }
  return (
    <header className="container-fluid bg-primary py-3 mb-2 sticky-sm-top">
      <nav className="d-md-flex justify-content-around align-items-center">
        <div className="logo">
          <img className="logo-img" src={img} alt="" />
          <p className="p-0 m-0">Beauty Shooter</p>
        </div>
        <div className="d-block">
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blogs">Blogs</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">About</NavLink>
          {
            user ?
            <button onClick={handleSignOut} className="link">Sign Out</button>

            :<NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/login">Login</NavLink>
          }

        </div>
      </nav>
    </header>

  );
};

export default Header;
