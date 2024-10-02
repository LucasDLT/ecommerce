import { useState, createContext } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  

  //AGREGA UN ELEMENTO VERIFICA SU EXISTENCIA Y ACTUALIZA SU CANTIDAD DE SER NECESARIO
  const addItem = (item, quantity) => {
    const isInCart = cart.find((prod) => prod.id === item.id);
    if (isInCart) {
      const update = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(update);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  //ELIMINA ELEMENTOS INDIVIDUALMENTE
  const removeItem = (id) => {
    const index = cart.findIndex((prod) => prod.id === id);

    if (index !== -1) {
      const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
      setCart(updatedCart);
    }
  };
  //VACIA EL CARRITO
  const clearCart = () => {
    setCart([]);
  };
  //ACTUALIZA LA CANTIDAD DE ITEMS DESDE EL CARRITO
  const increaseQuantity = (id) => {
    setCart(cart.map(prod => 
      prod.id === id 
        ? { ...prod, quantity: prod.quantity + 1 } 
        : prod
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(prod => 
      prod.id === id 
        ? { ...prod, quantity: prod.quantity > 1 ? prod.quantity - 1 : 1 } 
        : prod
    ));
  };

  return (
    <cartContext.Provider
      value={{ cart, setCart, addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </cartContext.Provider>
  );
}
