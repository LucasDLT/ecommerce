import styled from "styled-components";
import ComponentButton from "../ComponentButton/ComponentButton";
import { useState } from "react";

export default function ItemCount() {
  const [count, setCount] = useState(0);

  const handlerSubtract = () => {
    setCount((num) => num - 1);
  };

  const handlerAdd = () => {
    setCount((num) => num + 1);
  };

  return (
    <CounterContainer>
      <ComponentButton onClick={handlerAdd} text="+" />
      <div>{count}</div>
      <ComponentButton onClick={handlerSubtract} text="-" />
    </CounterContainer>
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
  max-width: 5rem;
  input {
    max-width: 1rem;
  }
  button {
    width: rem;
    border-bottom: black 1px solid;
    cursor: pointer;
  }
`;
