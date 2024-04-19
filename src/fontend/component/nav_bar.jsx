import React from "react";
import { Router } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Nav_bar(){
    return(
        <>
         <div className="nav_bar">
         <ul>
            <li><NavLink to={"/home"}>Accueil</NavLink></li>
            <li>Vendre sur Gat Store</li>
            <li>Livraison</li>
         </ul>
         
         </div>
         
        </>
       
    )
}
export default Nav_bar;