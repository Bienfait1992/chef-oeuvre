import React from "react";
import { useState } from "react";

function Panier() {
  return (
    <div className="justify-center">
      <div className="font-bold text-6xl">Panier</div>

      <div className="flex gap-20 bg-white border border-gray-400 mb-10 ">
        <div className="m-2 ml-36">Nom et details Produit</div>
        <div className="m-2 ml-10">Prix unitaire</div>
        <div className="m-2">Quantité</div>
      </div>
      <div className=" flex gap-1 h-40 ">
        <div className="border border-gray-400 border-r w-96"></div>
        <div className="border border-gray-400 border-r w-44"></div>
        <div className="border border-gray-400 border-r w-44"></div>
        <div className="border border-gray-400 border-r gap-3 w-36 justify-center">
            <div><button className=" rounded-xl text-Black p-3 mb-3 mt-5 ml-5 border border-gray-400">Supprimer</button></div>
           <div><button className="bg-[#E64C3C] rounded-xl text-white p-3 ml-5 w-24">Acheter</button></div> 
        </div>
      </div>
    </div>
  );
}
export default Panier;
