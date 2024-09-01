import shoppingCart from "../../assets/shoppingCart.png";
import { CartContainer, ItemContainer } from "./Cart.css";
import { Link } from "react-router-dom";

export default function CartWidget({ totalItem }) {
  return (
    <>
      <Link to={"/cart"}>
        <CartContainer>
          <ItemContainer src={shoppingCart} />
          <p>{totalItem}</p>
        </CartContainer>
      </Link>
    </>
  );
}
