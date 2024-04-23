import React from "react";
import { NavLink } from "react-router-dom";




function Left_sidebar() {
    return (
        <div className="w-64   ">
            <div className="bg-[#02518A] w-64 text-white justify-items-center justify-center">
                <p className="text-center">Choisir une categorie</p>
            </div>
            <div className="h-80  w-64 pl-2.5">

                <div><NavLink to="/cuisine">Cuisine</NavLink></div>
                <div className="border-solid border-inherit border">
                    <ul>
                        <li className=""><p className="bg-[#E64C3C] text-white">Vetements</p>
                            <ul className="sous">
                                <div><li><NavLink to="/listevetementH">Homme</NavLink></li></div>
                                <div><li><NavLink to="/VetementF">Femme</NavLink></li></div>
                                <div><li><NavLink to="/VetementE">Enfant</NavLink></li></div>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <div><NavLink to="/decoration">Decoration</NavLink></div>
                    <div><NavLink to="/bilokos">Bilokos</NavLink></div>
                    <div><NavLink to="/informatique">Informatique</NavLink></div>
                    <div><NavLink to="/electronique">Electronique</NavLink></div>
                    <div><NavLink to="/decoration">Decoration Maison</NavLink></div>
                    <div><NavLink to="/telephone">Telephone</NavLink></div>
                    <div><NavLink to="/montreB">Montre & Bijoux</NavLink></div>
                </div>
            </div>


        </div>
    )
}
export default Left_sidebar;