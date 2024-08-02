import shoppingCart from "../../assets/shoppingCart.png";
import { CartContainer, ItemContainer } from "./Cart.css";

export default function CartWidget({ totalItem }) {
  return (
    <>
      <CartContainer>
        <ItemContainer src={shoppingCart} />
        <p> total: {totalItem}</p>
      </CartContainer>
    </>
  );
}
