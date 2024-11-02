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
  margin: 0.7rem;
  padding: 0.5rem;
  margin-top: 3.5rem;
  height: 60vh;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  box-shadow: 0 4px 9px rgb(0, 0, 0);
  background-color: #596759a4;
  border-radius: 10px;
`;


const MessageCart = styled.p`
  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  z-index: 2;
  position: relative;
`;

const StyledLink = styled(Link)`
  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  border-radius: 5px;
  background-color: #2a6c2e61;
  position: relative;
  left: 40%;
  z-index: 2;
  padding: 1rem;
  margin: 1rem;
  &:hover {
    box-shadow: 0 4px 9px rgb(0, 0, 0) ;
    transition: all 0.5s ease;}
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
    margin-right: 0.7rem;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    transform: scale(0.8);
    opacity: 0;
    border-bottom: solid 1px black;

    &.visible {
      transform: scale(1);
      opacity: 1;
    }

    button {
      font-family: "Nightfully Haunted", sans-serif;
      font-size: 1.4rem;
      cursor: pointer;
     
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
  border-radius: 5px;
  background-color: #28422aa6;
  position: absolute;
  top: -10%;
  left: 1px;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const CartContainer = styled.div`
  margin: 0.2rem;
  margin-top: 6rem;
  max-height: 73vh;
  border-radius: 5px;
  position: relative;
  
  .clearCart {
    font-family: "Nightfully Haunted", sans-serif;
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: #28422aa6;
    position: absolute;
    top: -10%;
    left: 89.7%;
    width: 7rem;
    height: 2.5rem;
    cursor: pointer;
    letter-spacing: 1px;
  }
`;

export default function CartComponent() {
  const {
    cart,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalCart,
    createOrder,
  } = useContext(cartContext);

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
    return (
      <div>No se inicia el carrito debido a un error de lectura del mismo</div>
    );
  }

  return (
    <CartContainer>
      <Cart>
       {cart.length === 0 ? (
          <>
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
        {cart.length > 0 && (
          <ComponentButton className="clearCart" onClick={clearCart}> Vaciar carrito</ComponentButton>
        )}{" "}
        <FormDataUser cart={cart} createOrder={createOrder} />
      </Cart>
    </CartContainer>
  );
}
