import React from "react";
import { DataVtmh } from "../datas/data_vetementH/data_vetementH";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function DetailsVth() {
  const { id } = useParams();
  // console.log(id);
  const data = DataVtmh;
  // console.log(data);
  const product = data.find((e) => e.id === parseInt(id));
  // console.log(product);

  return (
    <div>
    <div className="border-solid border-inherit border rounded-xl mb-5 w-96 justify-center items-center pt-20">
      <div>
        <img src={product.avatar1} className="m-auto mt-5" />
      </div>
      <div className="ml-20">{product.description}</div>
      <div className="ml-20">
        <span>prix:</span>
        {product.prix}
      </div>
      
    </div>
   <NavLink to={"/panier"}><button className="bg-[#E64C3C] rounded-xl text-white h-10 w-96">Ajouter au panier</button></NavLink> 
    </div>
  );
}
export default DetailsVth;
