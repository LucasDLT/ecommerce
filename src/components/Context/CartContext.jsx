import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useState, createContext } from "react";


export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState("")//recibe un id
  

   //CALCULAR TOTAL DEL CARRITO

  const getTotalCart = ()=>{
    return cart.reduce((acc, prod)=> acc + prod.price * prod.quantity, 0)
  }

  //

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
    const total = getTotalCart()
    
  };
  //ELIMINA ELEMENTOS INDIVIDUALMENTE
  const removeItem = (id) => {
    const index = cart.findIndex((prod) => prod.id === id);

    if (index !== -1) {
      const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
      setCart(updatedCart);
    }
   const total = getTotalCart()

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
    const total = getTotalCart()

  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(prod => 
      prod.id === id 
        ? { ...prod, quantity: prod.quantity > 1 ? prod.quantity - 1 : 1 } 
        : prod
    ).filter((prod)=>prod.quantity > 0));
    const total = getTotalCart()

  };
  //CREAR ORDENES
 const createOrder = (order)=>{
    const db = getFirestore()
    const orders= collection (db, "order")
    addDoc(orders, order).then((snapshot)=>{
      setOrder(snapshot.id)
    })

 }
  return (
    <cartContext.Provider
      value={{ cart, setCart, addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity, getTotalCart, createOrder }}
    >
      {children}
    </cartContext.Provider>
  );
}
