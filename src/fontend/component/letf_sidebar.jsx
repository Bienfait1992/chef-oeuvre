import React from "react";
import { NavLink } from "react-router-dom";
import Menuderoulant from "./menuderoulant";




function Left_sidebar() {
    return (
        <div className="w-64 bg-gray-100   ">
            <div className="bg-[#02518A] w-64 text-white justify-items-center justify-center mb-2">
                <p className="text-center">Choisir une categorie</p>
            </div>
            <div className="h-80  w-64 pl-2.5 ">

            <ul className="sous"><div><NavLink to="/cuisine">Cuisine</NavLink> </div></ul>
           <div>< Menuderoulant/></div> 
               <div> <ul className="sous">
                    <div><NavLink to="/decoration">Decoration</NavLink></div>
                    <div ><NavLink to="/bilokos">Bilokos</NavLink></div>
                    <div><NavLink to="/informatique">Informatique</NavLink></div>
                    <div ><NavLink to="/electronique">Electronique</NavLink></div>
                    <div ><NavLink to="/decoration">Decoration Maison</NavLink></div>
                    <div ><NavLink to="/telephone">Telephone</NavLink></div>
                    <div ><NavLink to="/montreB">Montre & Bijoux</NavLink></div>
                </ul>
                </div>
            </div>


        </div>
    )
}
export default Left_sidebar;