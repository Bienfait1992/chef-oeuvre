import React from "react";




function Left_sidebar() {
    return (
        <div className="w-64  mt-3 ">
            <div className="bg-[#02518A] w-64 text-white justify-items-center justify-center">
                Choisir une categorie
            </div>
            <div className="h-80  w-64 pl-2.5">
                    <a to="/cuisine">Cuisine</a>
                    <div><a to="/vetement">Vetements</a></div>
                    <div><a to="/decoration">Decoration</a></div>
                    <div><a to="/bilokos">Bilokos</a></div>
                    <div><a to="/informatique">Informatique</a></div>
                    <div><a to="/electronique">Electronique</a></div>
                   <div><a to="/decoration">Decoration Maison</a></div> 
                    <div><a to ="/telephone">Telephone</a></div>
                    <div><a to="/motre_bijoux">Montre & Bijoux</a></div>
            </div>


        </div>
    )
}
export default Left_sidebar;