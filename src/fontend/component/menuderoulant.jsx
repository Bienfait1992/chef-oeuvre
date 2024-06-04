import React from "react"
import { NavLink } from "react-router-dom";


function Menuderoulant(){
    return(

            <ul className="menu"> 
                    <div className="flexmenu">
                        <div className="deroulant">Vetements <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1717498897/caret_he7dcz.png" alt="" className="flecheindex w-3 h-3 mt-2"/></div> 
                            <ul className="sousmenu bg-gray-100">
                                <li><NavLink to="/listevetementH">Homme</NavLink></li>
                                <li><NavLink to="/VetementF">Femme</NavLink></li>
                                <li><NavLink to="/VetementE">Enfant</NavLink></li>
                            </ul>
                    </div>  
            </ul>   
                
               
    )
}
export default Menuderoulant;
