import React from "react";
import  {useContext}  from "react";
import { cartContext } from "../Context/CartContext";
import ComponentButton from "../ComponentButton/ComponentButton";

export default function CartComponent() {
  const { cart, removeItem, clearCart, increaseQuantity, decreaseQuantity } = useContext(cartContext);
  if (!Array.isArray(cart)) {
    return (
      <div>No se inicia el carrito debido a un error de lectura del mismo</div>
    );
  }
  return (
    <div>
      <h1>VISTA DEL CARRITO</h1>
      {cart.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        <div>
          <ul>
            {cart.map((prod) => (
              <li key={prod.id}>
                <h3>{prod.name}</h3>
                <p>Precio:${prod.price}</p>
                <p>Cantidad: {prod.quantity || 1}</p>  
                <ComponentButton
                  onClick={() => removeItem(prod.id)}
                >Eliminar</ComponentButton>
                <ComponentButton
                  onClick={() => decreaseQuantity(prod.id)}
                  disabled={prod.quantity === 1}
                >-</ComponentButton>
                <ComponentButton onClick={() => increaseQuantity(prod.id)}>+</ComponentButton>
              </li>
            ))}
          </ul>
          <ComponentButton onClick={clearCart}> Vaciar carrito</ComponentButton>
        </div>
      )}
    </div>
  );
}
