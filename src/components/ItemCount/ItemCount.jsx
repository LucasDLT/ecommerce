import styled from "styled-components";
import ComponentButton from "../ComponentButton/ComponentButton";
import { useState } from "react";
import { toast } from "sonner";
import StockComponent from "../StockComponent/StockComponent";

export default function ItemCount({ itemStock }) {
  const initialStock = Number.isFinite(Number(itemStock))
    ? Number(itemStock)
    : 0;

  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(initialStock);


  const handlerSubtract = () => {
    if (count > 0) {
      setCount((numCount) => numCount - 1);
      setStock((numStock) => numStock + 1);
    }
  };

  const handlerAdd = () => {
    if (stock > 0) {
      setCount((numCount) => numCount + 1);
      setStock((numStock) => numStock - 1);

      if (stock - 1 === 2) {
        toast(<CustomToast>aviso de poco stock</CustomToast>);
      }
    } else {
      toast(<CustomToast>no puedes agregar más items al carrito</CustomToast>);
    }
  };

  return (
    <>
      <CounterContainer>
        <ComponentButton
          onClick={handlerAdd}
        >+</ComponentButton>
        <div>{count}</div>
        <ComponentButton
          onClick={handlerSubtract}
        >-</ComponentButton>
        <StockComponent itemStock={stock}>unidades {stock}</StockComponent>
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
  max-width: auto;
  background-color: #54a26959;
  input {
    max-width: 1rem;
  }
  button {
    max-width: 1.3rem;
    cursor: pointer;
    padding: 0.4rem;
    margin: 0.3rem;
    border-radius: 0.2rem;
    border: solid 1px grey;
    background-color: #e0b4b456;
    &:hover {
      backdrop-filter: blur(3px);
      transition: backdrop-filter 0.3s ease-in-out;
    }
  }
`;

export const CustomToast = styled.div`
  color: black;
  font-weight: bolder;
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-family: "Dashley", sans-serif;
  letter-spacing: 0.1rem;
  background-color: #2d804d93;
`;
