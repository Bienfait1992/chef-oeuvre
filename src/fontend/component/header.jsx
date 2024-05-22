import React from "react";
import Nav_bar from "./nav_bar";
import Caroussel from "./caroussel";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <div className="header">
        <div>
          <NavLink to={"/home"}>
            <img src="src/fontend/images/images.png" className="logo"></img>
          </NavLink>
        </div>
        <div className="ml-60 mr-12">
          <input type="text" placeholder=" rechercehe" className=" input" />
          <button className="recherche ">Recherche</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dk2apwxms/image/upload/v1714406679/user_8484075_jnaik7.png"
            className="user"
          ></img>
        </div>
        <NavLink to={"/signin"}>
          <button>Sign in</button>
        </NavLink>
        <NavLink to={"/signup"}>
          <button className="bg-[#ffffff] rounded-xl text-black p-1">
            Sign Up
          </button>
        </NavLink>
        <div className="ml-20">
          <NavLink to={"/panier"}><img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1716356968/images1_fh81yv.png" className="border rounded-xl w-10"/></NavLink>
        </div>
      </div>
      <div>
        <Nav_bar />
        {/* <Caroussel /> */}
      </div>
    </div>
  );
}
export default Header;
