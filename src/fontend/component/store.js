import { create } from "zustand";
import { DataVtmh } from "../datas/data_vetementH/data_vetementH";
import { useParams } from "react-router-dom";

const usePanier = create((set) => ({
  cart: [],
  updateCart: (newProduct) =>
    set((state) => ({ cart: [...state.cart, newProduct] })),
}));

export default usePanier;
