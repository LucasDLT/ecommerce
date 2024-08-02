import shoppingCart from "../../assets/shoppingCart.png";
import styled from "styled-components"

export const ItemContainer = styled.img`
  max-width: 1.5rem;
  cursor: pointer;
`
export const CartContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 0.3rem;
  align-items: start;
  justify-content: end;
  gap: 0.5rem;
  

`

export default function CartWidget({totalItem}) {
  return (
    <>
      <CartContainer>
        <ItemContainer src={shoppingCart} />
        <p> total: {totalItem}</p>
      </CartContainer>
    </>
  );
}
