import React from "react";
import { useState } from "react";
import { usePanier } from "../component/store";

function Panier() {
  // const{produit}: produit();
  // const { id } = useParams();
  // // console.log(id);
  // const data = DataVtmh;
  // // console.log(data);
  // const product = data.find((e) => e.id === parseInt(id));
  // // console.log(product);
  // const handleClick = (){
  //   reset:""
  // }
  const [count, setCount] = useState(1);

  const { cart } = usePanier();
  return (
    <div className=" m-auto">
      <div className="font-bold text-6xl">Panier</div>

      <div className="flex gap-20 bg-white border border-gray-400 mb-10 ">
        <div className="m-2 ml-36 text-gray-400">Nom et details Produit</div>
        <div className="m-2 ml-10 text-gray-400">Prix unitaire</div>
        <div className="m-2 text-gray-400">Quantité</div>
      </div>
      <div className="  mb-10  ">
        <>
          {cart.map((Element) => (
            <div>
              <div className="flex">
                <div className="border  border-gray-400 flex gap-3 w-96  p-3">
                  <img src={Element.avatar1} alt="" />
                  {Element.description}
                </div>

                <div className="border  border-gray-400 w-40  p-16 pt-32">
                  {Element.prix}$
                </div>
                <div className="border  border-gray-400 w-40 ">
                  <div className="flex m-5 ">
                    <button
                      className=" text-black  p-2 border-solid border-inherit border"
                      onClick={function () {
                        setCount(count - 1);
                      }}
                      disabled={count === 1}
                    >
                      -
                    </button>

                    <div>
                      <input
                        type="text"
                        className="text-black    p-2 border-solid border-inherit border text-center w-16 "
                        value={count}
                      ></input>
                    </div>
                    <div>
                      <button
                        className=" text-black  p-2 border-solid border-inherit border"
                        onClick={function () {
                          setCount(count + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border  border-gray-400 w-40 ">
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
              <div className="border  border-gray-400  mb-10 font-bold text-1xl ">
                <span>SOUS TOTAL :</span>
                <input type="" value={count * Element.prix}></input>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
export default Panier;
