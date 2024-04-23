import React from "react";
import { NavLink } from "react-router-dom";
NavLink



function Footer() {
    return (
        <div className="text-center">
            <div className="bg-[#02518A]  text-white">
                <NavLink to="#">retour en haut</NavLink>
            </div>
            <div className="flex gap-2.5 bg-[#001E39] justify-center items-center  text-white h-60" >

                <div className="">
                    contact
                </div>
                <div className="">
                    contact
                </div>
                <div className=" ">
                    contact
                </div>
            </div>

            <div className="bg-[#001E39]  border-solid border-white border-t-[1px]  h-20 ">
                
                    <NavLink to={"/home"}><img src="src/fontend/images/images.png" alt="" className="w-8 ml-96 mt-8" /></NavLink>
                
            </div>

        </div>
    )
}
export default Footer;