import { create } from "zustand";
// import { DataVtmh } from "../datas/data_vetementH/data_vetementH";
// import { useParams } from "react-router-dom";
import { useState } from "react";

export const usePanier = create((set) => ({
  //   email: "georgesakake",
  cart: [],
  // updateCart: (updatedCart) => {
  //   set({ cart: updatedCart });
  // },
  updateCart(updatedCart) {
    set({ cart: updatedCart });
  },
}));
// export const globaleStore = () =>{
//   usePanier.setState((state) =>({cart: state.cart}))
// }
// // export const newproduit = () => {
// //   usePanier.setState((state) => ({ cart: state.cart.push("gloire") }));
// // };
