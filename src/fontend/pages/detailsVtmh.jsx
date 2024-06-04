import React from "react";
import { DataVtmh } from "../datas/data_vetementH/data_vetementH";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { usePanier } from "../component/store";

function DetailsVth() {
  const { updateCart, cart } = usePanier();
  // updatedCart = product;
  // cart = [updatedCart];

  const { id } = useParams();
  // console.log(id);
  const data = DataVtmh;
  // console.log(data);
  const product = data.find((e) => e.id === parseInt(id));
  // console.log(product);

  const handleClick = () => {
    alert("le produit a été ajouter dans le panier");
    const updatedCart = [product, ...cart];
    updateCart(updatedCart);
    console.log(cart);
  };
const buttonClick1 = () =>{
  setClicked(true);
};
const buttonClick2 = () =>{
  setClicked(blue);
};
const buttonDeclic = () =>{
  setClicked(false);
  // alert:{"double ckliquer pour deselectioner"}
};
  const [count, setCount] = useState(1);

  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div className="flex mb-20">
        <div className="border-solid border-inherit border rounded-xl mb-5 w-96 justify-center items-center pt-20">
          <img src={product.avatar1} className="m-auto mb-14" />
        </div>

        <div>
          <div className="ml-20 mb-10">{product.description}</div>
          <div className="ml-20 mb-4 ">
            <span className="">Prix:</span>
            <span className="ml-14">{product.prix}$</span>
          </div>

          <div className="ml-20 mb-4 flex">
            <span>Quantité:</span>
            <div className="flex ml-5 ">
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

          <div className="">
            <div className="ml-20 mb-10">
              {" "}
              Couleur :
              <button >
                <span className="mr-2  text-black m-5 p-2 border-solid border-inherit border " style={{ backgroundColor: clicked ? 'red' : 'white', color: 'black' }}>
                  Noir
                </span>
              </button>
              <button id="1" onClick={buttonClick1} onDoubleClick={buttonDeclic} >
                <span className="mr-2 text-black m-5 p-2 border-solid border-inherit border"    style={{ backgroundColor: clicked ? 'red' : 'white', color: 'black' }} disabled={clicked}>
                  Rouge
                </span>
              </button>
              <button id="2">
                <span className="mr-2 text-black m-5 p-2 border-solid border-inherit border"  >
                  Blue
                </span>
              </button>
            </div>

            <div className="ml-20">
              Tails :
              <button>
                <span className="mr-2  text-black m-5 p-2 border-solid border-inherit border ">
                  S
                </span>
              </button>
              <button>
                <span className="mr-2 text-black m-5 p-2 border-solid border-inherit border">
                  M
                </span>
              </button>
              <button>
                <span className="mr-2 text-black m-5 p-2 border-solid border-inherit border">
                  L
                </span>
              </button>
              <button>
                <span className="mr-2 text-black m-5 p-2 border-solid border-inherit border">
                  XL
                </span>
              </button>
              <button>
                <span className="mr-2 text-black m-5 p-2 border-solid border-inherit border">
                  XXL
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          {/* <NavLink to="/panier"> */}
          <button
            className="bg-[#E64C3C] rounded-xl text-white h-10 w-96 "
            onClick={handleClick}
          >
            Ajouter au panier
          </button>
          {/* </NavLink> */}
        </div>

        <div className=" mb-20 ml-20 p-2  flex justify-items-center">
          <div className="font-bold text-2xl bg-[#E64C3C] p-1 text-white">
            Sous Total:
          </div>
          <div className="border-solid border-[#E64C3C] border">
            <input
              type="text"
              value={count * product.prix}
              className="text-center items-center mt-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsVth;
