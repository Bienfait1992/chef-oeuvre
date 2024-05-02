import React from "react";
import { useState } from "react";
import { DataVtmh } from "../datas/data_vetementH/data_vetementH";
import { useParams } from "react-router-dom";
import { usePanier } from "../component/store";

function Panier() {
  // const{produit}: produit();
  // const { id } = useParams();
  // // console.log(id);
  // const data = DataVtmh;
  // // console.log(data);
  // const product = data.find((e) => e.id === parseInt(id));
  // // console.log(product);
  // // const [count, setCount] = useState(1);
  const { cart, updateCart } = usePanier();
  return (
    <div className="justify-center">
      <div className="font-bold text-6xl">Panier</div>

      <div className="flex gap-20 bg-white border border-gray-400 mb-10 ">
        <div className="m-2 ml-36 text-gray-400">Nom et details Produit</div>
        <div className="m-2 ml-10 text-gray-400">Prix unitaire</div>
        <div className="m-2 text-gray-400">Quantité</div>
      </div>
      <div className=" flex gap-1 h-40 ">
        <div className="border border-gray-400 border-r w-96">
          {/* <div className="border-solid border-inherit border rounded-xl mb-5 w-96 justify-center items-center pt-20">
            <img src="" className="m-auto mt-5" />
          </div> */}
          {/* {email} */}
          {cart}
          {updateCart.pruduct}
        </div>

        <div className="border border-gray-400 border-r w-44"> </div>
        <div className="border border-gray-400 border-r w-44"></div>
        <div className="border border-gray-400 border-r gap-3 w-36 justify-center">
          <div>
            <button className=" rounded-xl text-Black p-3 mb-3 mt-5 ml-5 border border-gray-400">
              Supprimer
            </button>
          </div>
          <div>
            <button className="bg-[#E64C3C] rounded-xl text-white p-3 ml-5 w-24">
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Panier;
