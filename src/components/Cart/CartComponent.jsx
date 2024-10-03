import React from "react";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import ComponentButton from "../ComponentButton/ComponentButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = styled.section`
  margin: 1rem;
  margin-top: 3.5rem;
  height: 60vh;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;
const TitleCart = styled.h2`
  font-family: "Nightfully Haunted", sans-serif;
  font-size: xx-large;
  margin: 0.5rem;
  z-index: 2;
  position: relative;
`;
const MessageCart = styled.p`
  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  margin: 0.5rem;
  z-index: 2;
  position: relative;
`;
const StyledLink = styled(Link)`
  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.5px;
  background-color: #4e4e4e93;
  position: relative;
  z-index: 2;

  &:hover {
    background-color: #80808094;
  }
`;
const ListCart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  overflow-y: scroll;
  z-index: 1;

  li {
    border: solid 1px grey;
    padding: 0.3rem;
    margin: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    font-family: "Nightfully Haunted", sans-serif;

    button{
      font-family: "Nightfully Haunted", sans-serif;
  
    }
    img {
      width: 5rem;
    }
  }
`;

const TotalCart = styled.section`
  position: absolute;
  left: 78%;
  top: 50%;
  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  border: 2px grey solid;
  border-radius: 5px;
  padding: 0.5px;
  background-color: #4e4e4e93;
`;
export default function CartComponent() {
  const {
    cart,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalCart,
  } = useContext(cartContext);
  if (!Array.isArray(cart)) {
    return (
      <div>No se inicia el carrito debido a un error de lectura del mismo</div>
    );
  }
  return (
    <>
      <TitleCart>CARRITO DE COMPRAS</TitleCart>
      <Cart>
        {cart.length === 0 ? (
          <>
            <MessageCart>El carrito esta vacio</MessageCart>
            <StyledLink to={"/item"}>Regresar al Menu</StyledLink>
          </>
        ) : (
          <ListCart>
            {cart.map((prod) => (
              <li key={prod.id}>
                <img src={prod.image} alt={prod.title} />
                <h3>{prod.name}</h3>
                <p>Precio:${prod.price}</p>
                <ComponentButton onClick={() => removeItem(prod.id)}>
                  Eliminar
                </ComponentButton>
                <ComponentButton
                  onClick={() => decreaseQuantity(prod.id)}
                  disabled={prod.quantity && prod.quantity === 1}
                >
                  -
                </ComponentButton>
                <p>Cantidad: {prod.quantity || 1} </p>
                <ComponentButton
                  onClick={() => increaseQuantity(prod.id)}
                  disabled={prod.quantity === prod.stock}
                >
                  +
                </ComponentButton>
              </li>
            ))}
          </ListCart>
        )}
      </Cart>
      <TotalCart>
        <h2>Total: ${getTotalCart()}</h2>
        <ComponentButton onClick={clearCart}> Vaciar carrito</ComponentButton>
      </TotalCart>
    </>
  );
}
