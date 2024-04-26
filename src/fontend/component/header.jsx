import React from "react";
import Nav_bar from "./nav_bar";
import Caroussel from "./caroussel";
import { NavLink } from "react-router-dom";




function Header() {
    return (
        <div className="">
            <div className="header">
                <div><NavLink to={"/home"}><img src="src/fontend/images/images.png" className="logo"></img></NavLink></div>
                <div><input type="text" placeholder=" rechercehe" className="w-96 rounded-xl h-8" /></div>
                <div><img src="src/fontend/images/user/user_8484075.png" className="user"></img></div>
                <NavLink to={"/signin"}><button>Sign in</button></NavLink>
                <NavLink to={"/signup"}><button className="bg-[#ffffff] rounded-xl text-black p-3">Sign Up</button></NavLink>
                <div><NavLink to={"/panier"}><img src="src/fontend/icones/conversation-svgrepo-com.svg" alt="" className="w-8" /></NavLink></div>
            </div>
            <div>
                <Nav_bar />
                {/* <Caroussel /> */}
            </div>
        </div>
    )
}
export default Header;