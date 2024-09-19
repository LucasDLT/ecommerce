import shoppingCart from "../../assets/shoppingCart.png";
import { CartContainer, ItemContainer } from "./Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext, CartProvider } from "../Context/CartContext";

export default function CartWidget() {

  const [cart] = useContext(cartContext)//aca estoy extraendo el cart desde el contexto, por lo que cart vale lo que contiene el carrito

  return (
    <>
      <Link to={"/cart"}>
        <CartContainer>
          <ItemContainer src={shoppingCart} />
          <p>{cart.length}</p>
        </CartContainer>
      </Link>
    </>
  );
}
