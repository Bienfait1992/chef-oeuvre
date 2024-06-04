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
            <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1717436768/GAT_2_v0iiyg.png" className="logo"></img>
          </NavLink>
        </div>
        <div className="ml-44 mr-12">
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
          <button className="  text-white">Sign in</button>
        </NavLink>
        <NavLink to={"/signup"}>
          <button className=" border rounded-2xl text-white p-1">
            Sign Up
          </button>
        </NavLink>
        <div className="ml-20">
          <NavLink to={"/panier"}><img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1716356968/images1_fh81yv.png" className="border rounded-full w-10" /></NavLink>
        </div>
      </div>
      <div>
        <Nav_bar />
        <div className="">
          <Caroussel />
        </div>
      </div>
    </div>
  );
}
export default Header;
