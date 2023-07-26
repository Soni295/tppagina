import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();

export function CardProvider({ children }) {
  const [cart, setcart] = useState([]);

  function deleteProductById(id) {
    const filterList = cart.filter((element) => element.id !== id);
    setcart(filterList);
  }
  function addProduct(product) {
    setcart((prev) => [...prev, product]);
  }
  return (
    <cartContext.Provider value={{ cart, deleteProductById, addProduct }}>
      {children}
    </cartContext.Provider>
  );
}
