import React from "react";
import { Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Menuderoulant from "./menuderoulant";

function Nav_bar(){
    return(
        <>
         <div className="nav_bar">
         <ul>
            <li className="menu"><NavLink to={"/home"}>Accueil</NavLink></li>
            <li><NavLink to={"/home"}>Vendre sur Gat Store</NavLink></li>
            <li><NavLink to={"/livraison"}>Livraison</NavLink></li>
         </ul>
         
         </div>
         
        </>
       
    )
}
export default Nav_bar;