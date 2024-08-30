import styled from "styled-components";
import ComponentButton from "../ComponentButton/ComponentButton";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ItemCount({itemStock}) {

  const [count, setCount] = useState(0);

  const [stock, setStock] = useState(itemStock);

  //objeto con colores para practicar
  const colorButton = {
    add: "green",
    subs: "red",
  };
  
  const handlerSubtract = () => {
    if (count > 0) {
      setCount((numCount) => numCount - 1);
      setStock((numStock) => numStock + 1);
    }
  };

  const handlerAdd = () => {
    if (count < itemStock) {
      setCount((numCount) => numCount + 1);
      setStock((numStock) => numStock - 1);
    } else {
      toast(<CustomToast>no puedes agregar más items al carrito</CustomToast>);
    }
    if (stock === 2) {
      toast(<CustomToast>aviso de poco stock</CustomToast>);
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
      <StockContainer >{stock}</StockContainer>
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

export const CustomToast = styled.div`
  color: black;
  font-weight: bolder;
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-family: "Dashley", sans-serif;
  letter-spacing:0.1rem;
  border: 1px solid black;
  background-color: #2d804d93;
`;
