import React from "react";
import Nav_bar from "./nav_bar";
import Caroussel from "./caroussel";
import { NavLink } from "react-router-dom";




function Header() {
    return (
        <div>
            <div className="header">
                <div><img src="src/fontend/images/images.png" className="logo"></img></div>
                <div><input type="text" placeholder="Qu'est ce vous recherceher?" className="recherche" /></div>
                <div><img src="src/fontend/icones/user_11129843.png" className="user"></img></div>
                <NavLink to={"/"}><button>Sign in</button></NavLink>
                <NavLink to={"/signup"}><button>Sign Up</button></NavLink>
                <div><img src="src/fontend/icones/conversation-svgrepo-com.svg" alt="" className="panier" /></div>
            </div>
            <div>
                <Nav_bar />
                {/* <Caroussel /> */}
            </div>
        </div>
    )
}
export default Header;