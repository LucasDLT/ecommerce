import styled from "styled-components";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import { useState } from "react";
import ComponentButton from "../ComponentButton/ComponentButton";
import StockComponent from "../StockComponent/StockComponent"

export default function ItemCount({ item }) {
  const { addItem, increaseQuantity, decreaseQuantity } = useContext(cartContext);  

  const initialStock = Number.isFinite(Number(item.stock)) ? Number(item.stock) : 0;

  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(initialStock);

  const handlerSubtract = () => {
    if (count > 0) {
      setCount((numCount) => numCount - 1);
      setStock((numStock) => numStock + 1);
      decreaseQuantity(item.id); 
    }
  };

  const handlerAdd = () => {
    if (stock > 0) {
      setCount((numCount) => numCount + 1);
      setStock((numStock) => numStock - 1);
      increaseQuantity(item.id);  
      
      if (stock - 1 === 2) {
        toast(<CustomToast>¡Aviso de poco stock!</CustomToast>);
      }
    } else {
      toast(<CustomToast>No puedes agregar más items al carrito</CustomToast>);
    }
  };

  return (
    <>
      <CounterContainer>
        <ComponentButton onClick={handlerAdd}>+</ComponentButton>
        <div>{count}</div>
        <ComponentButton onClick={handlerSubtract}>-</ComponentButton>
        <StockComponent itemStock={stock}>Unidades disponibles: {stock}</StockComponent>
      </CounterContainer>
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
  background-color: #54a26959;
`;

export const CustomToast = styled.div`
  color: black;
  font-weight: bolder;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: #2d804d93;
`;
