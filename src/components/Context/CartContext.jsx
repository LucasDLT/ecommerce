import { useState, createContext } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]); // se utiliza spread operator para gregar un item, ya que con los metodos de arrays mutamos el listado y no deseamos eso
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((prod) => prod.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = () => {
    return cart.some(prod.id === id);
  };

  return (
    <cartContext.Provider
      value={[cart, setCart, addItem, removeItem, clearCart, isInCart]}
    >
      {children}
    </cartContext.Provider>
  );
}
