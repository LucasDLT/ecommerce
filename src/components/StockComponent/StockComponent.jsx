import React from "react";
import styled from "styled-components";

export default function StockComponent({children, prop}) {
  return <StockContainer prop={prop}>{children}</StockContainer>;
}
export const StockContainer = styled.div`
  padding: 1rem;
  margin: 0.3rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.3rem;
  width: 6.3rem;
`;
