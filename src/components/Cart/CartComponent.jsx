import React from "react";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../Context/CartContext";
import ComponentButton from "../ComponentButton/ComponentButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { useRef } from "react";
import { FormDataUser } from "../FormDataUser/FormDataUser";

const ScrollContainer = styled(OverlayScrollbarsComponent)`
  .os-scrollbar-vertical {
    background-color: #0d4a327d;
  }
  .os-scrollbar-handle {
    background-color: #11693c92;
    border-radius: 5px;
    border: solid 1px black;
    transition: background-color 0.3s ease;
  }
  .os-scrollbar-handle:hover {
    background-color: #0f783a94;
  }
`;

const Cart = styled.section`
  margin: 0.5rem;
  padding: 0.5rem;
  margin-top: 3.5rem;
  height: 60vh;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-radius: 5px;
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
  z-index: 2;
  position: relative;
  
  ;
`;

const StyledLink = styled(Link)`
  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  border-radius: 5px;
  background-color: #2a6c2e61;
  position: relative;
  z-index: 2;
  padding:1rem;
  margin: 1rem;

  &:hover {
    background-color: #80808094;
  }
`;

const ListCart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  li {
    display: flex;
    font-size: 1.4rem;
    align-items: center;
    justify-content: space-around;
    position: relative;
    font-family: "Nightfully Haunted", sans-serif;
    background-color: transparent;
    backdrop-filter: blur(2px);
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    margin-right: 0.7rem;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out; 
    transform: scale(0.8); 
    opacity: 0; 
    
    &.visible {
      transform: scale(1);
      opacity: 1; 
    }
    
    button {
      font-family: "Nightfully Haunted", sans-serif;
      font-size: 1.4rem;
    }
    img {
      width: 5rem;
    }
  }
`;

const QuantityButton = styled(ComponentButton)`
  font-size: 2rem;
  background-color: #1c3224ce;
  color: white;
  border-radius: 5px;
`;

const TotalCart = styled.section`

  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  border: 2px grey solid;
  border-radius: 5px;
  background-color: #4a7b4dc1;
  position: absolute;
  top: -5%;
  margin-bottom: 1rem;
  
`;

const CartContainer = styled.div`
  background-color: #6d867160;
  padding: 0.4rem;
  margin: 0.2rem;
  margin-top:3rem;
  max-height:73vh;
    button{
    font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.2rem;
  border: 2px grey solid;
  border-radius: 5px;
  background-color: #4a7b4dc1;
  
  }
`;

export default function CartComponent() {
  const { cart, removeItem, clearCart, increaseQuantity, decreaseQuantity, getTotalCart, createOrder } =
    useContext(cartContext);

  const listRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); 
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    listRef.current.forEach((li) => {
      if (li) observer.observe(li);
    });

    return () => {
      listRef.current.forEach((li) => {
        if (li) observer.unobserve(li);
      });
    };
  }, [cart]);

  if (!Array.isArray(cart)) {
    return <div>No se inicia el carrito debido a un error de lectura del mismo</div>;
  }

  return (
    <CartContainer>
      <TitleCart>CARRITO DE COMPRAS</TitleCart>

      <Cart>
     
        {cart.length === 0 ? (
          <>
            <MessageCart>El carrito está vacío</MessageCart>
            <StyledLink to={"/item"}>Regresar al Menú</StyledLink>
          </>
        ) : (
          <ScrollContainer
            options={{
              scrollbars: { autoHide: "scroll" },
            }}
            style={{
              height: "60vh",
              width: "100%",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <ListCart>
              {cart.map((prod, index) => (
                <li key={prod.id} ref={(el) => (listRef.current[index] = el)}>
                  <img src={prod.image} alt={prod.title} />
                  <h3>{prod.name}</h3>
                  <p>Precio: ${prod.price}</p>
                  <ComponentButton onClick={() => removeItem(prod.id)}>
                    Eliminar
                  </ComponentButton>
                  <QuantityButton
                    onClick={() => decreaseQuantity(prod.id)}
                    disabled={prod.quantity && prod.quantity === 1}
                  >
                    -
                  </QuantityButton>
                  <p>Cantidad: {prod.quantity || 1} </p>
                  <QuantityButton
                    onClick={() => increaseQuantity(prod.id)}
                    disabled={prod.quantity === prod.stock}
                  >
                    +
                  </QuantityButton>
                </li>
              ))}
            </ListCart>
          </ScrollContainer>
        )}
      <TotalCart>
        <h2>Total: ${getTotalCart()}</h2>
      </TotalCart>
{   cart.length > 0 &&(     <ComponentButton onClick={clearCart}> Vaciar carrito</ComponentButton>)
}      <FormDataUser cart={cart} createOrder={createOrder} />
      </Cart>

    </CartContainer>
  );
}
