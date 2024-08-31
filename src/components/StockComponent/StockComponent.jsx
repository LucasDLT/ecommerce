import React from "react";
import styled from "styled-components";

export default function StockComponent({children, prop}) {
  return <StockContainer prop={prop}>{children}</StockContainer>;
}
export const StockContainer = styled.div`
  border: solid black 1px;
  padding: 1rem;
  margin: 0.3rem;
  max-width: 22rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.3rem;
`;
