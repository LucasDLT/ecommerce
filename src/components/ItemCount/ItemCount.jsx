import styled from "styled-components";
import ComponentButton from "../ComponentButton/ComponentButton";
import { useState } from "react";

export default function ItemCount() {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(5);
  //stock hardcodeado para practicar como en clase
  const maxStock = 5;
  //objeto con colores para practicar
  const colorButton = {
    add: "green",
    subs: "red",
  };
  //listado de practica para acceder a los objetos
  const listaDePractica = [
    { ID: 1, STOCK: 10, NAME: "Taza de café", PRICE: 5.99 },
    { ID: 2, STOCK: 8, NAME: "Taza de té", PRICE: 6.49 },
    { ID: 3, STOCK: 15, NAME: "Taza de chocolate", PRICE: 7.99 },
    { ID: 4, STOCK: 5, NAME: "Taza de viaje", PRICE: 9.99 },
    { ID: 5, STOCK: 20, NAME: "Plato de cena", PRICE: 12.99 },
    { ID: 6, STOCK: 18, NAME: "Plato de postre", PRICE: 8.99 },
    { ID: 7, STOCK: 25, NAME: "Plato de sopa", PRICE: 11.49 },
    { ID: 8, STOCK: 12, NAME: "Plato llano", PRICE: 9.49 },
    { ID: 9, STOCK: 7, NAME: "Mate clásico", PRICE: 15.99 },
    { ID: 10, STOCK: 9, NAME: "Mate moderno", PRICE: 19.99 },
  ];
  const promesaDePrueba = new Promise((resolve, reject) => {
    if (resolve) {
      setTimeout(() => {
        console.log(listaDePractica[2].NAME);
      }, 3000);
    }
    if (reject) {
      console.log("promesa rechazada");
    }
  });

  promesaDePrueba.then(
    (resultado) => {
      console.log(resultado);
    },
    (err) => {
      console.log("Error:" + err);
    }).catch(err=>{
      console.log("ejemplo del material");
      
    })

  const handlerSubtract = () => {
    if (count > 0) {
      setCount((numCount) => numCount - 1);
      setStock((numStock) => numStock + 1);
    }
  };

  const handlerAdd = () => {
    if (count < maxStock) {
      setCount((numCount) => numCount + 1);
      setStock((numStock) => numStock - 1);
    } else {
      alert("no puedes agregar mas items al carrito");
    }
    if (stock === 2) {
      alert("poco stock");
    }
  };

  return (
    <>
      <CounterContainer>
        <ComponentButton
          backgroundColor={colorButton.add}
          onClick={handlerAdd}
          text="+"
        />
        <div>{count}</div>
        <ComponentButton
          backgroundColor="red"
          onClick={handlerSubtract}
          text="-"
        />
      </CounterContainer>
      <StockContainer>{stock}</StockContainer>
    </>
  );
}

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  margin: 0.3rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  max-width: 6rem;
  background-color: #54a26959;
  input {
    max-width: 1rem;
  }
  button {
    max-width: 1.3rem;
    border: black 1px solid;
    cursor: pointer;
    padding: 0.4rem;
    margin: 0.3rem;
    border-radius: 0.2rem;
    background-color: transparent;
    &:hover {
      backdrop-filter: blur(3px);
      transition: backdrop-filter 0.3s ease-in-out;
    }
  }
`;
export const StockContainer = styled.div`
  border: solid black 1px;
  padding: 0.3rem;
  margin: 0.3rem;
  max-width: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.3rem;
`;
