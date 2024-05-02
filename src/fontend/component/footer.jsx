import React from "react";
import { NavLink } from "react-router-dom";
NavLink;

function Footer() {
  return (
    <div className="text-center">
      <div className="bg-[#02518A]  text-white">
        <NavLink to="#">retour en haut</NavLink>
      </div>
      <div className="flex gap-2.5 bg-[#001E39] justify-center items-center  text-white h-60">
        <div className="">
          <div className="font-bold text-2xl mb-8">Mieux nous connaitre</div>
          <div className="text-gray-400">
            <NavLink to="/apropos">A propos</NavLink>
          </div>
        </div>
        <div className="ml-56">
          <div className="font-bold text-2xl mb-8">contact</div>
          <div className="text-gray-400">Tel : 00243 827127764</div>
          <div className="text-gray-400">E-mail : georgesakake@gmail.com</div>
        </div>
        <div className="ml-56" >
         <div className="mb-8 font-bold text-2xl">Mode de paiement</div> 
          <div className="flex gap-3 ">
            <div>
              <NavLink>
                <img
                  src="https://res.cloudinary.com/dk2apwxms/image/upload/v1714406395/images_1_ujhgsq.png"
                  className="w-12"
                ></img>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  src="https://res.cloudinary.com/dk2apwxms/image/upload/v1714406469/images_2_vdmvs7.png"
                  className="w-12"
                ></img>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  src="https://res.cloudinary.com/dk2apwxms/image/upload/v1714406500/images_30_tnc3ze.jpg"
                  className="w-12"
                ></img>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="ml-56 ">
          <div className="font-bold text-2xl mb-8">Besoin d'aide</div>
          <div className="text-gray-400">Service client</div>
        </div>
      </div>

      <div className="bg-[#001E39]  border-solid border-white border-t-[1px]  h-20 ">
        <div className="">
        <NavLink to={"/home"}>
          <img
            src="src/fontend/images/images.png"
            alt=""
            className="w-8 m-auto mt-5"
          />
        </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Footer;
