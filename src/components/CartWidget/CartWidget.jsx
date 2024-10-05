import shoppingCart from "../../assets/shoppingCart.png";
import { CartContainer, ItemContainer } from "./Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";

export default function CartWidget() {

  const {cart, getTotalCart} = useContext(cartContext)//aca estoy extraendo el cart desde el contexto, por lo que cart vale lo que contiene el carrito
// tuve que cambiar la desestructuracion de corchetes a llaves para que se pueda acceder a los metodos, de lo contrario no me tomaba los cambios al eliminar items individuales
  const total= getTotalCart()
return (
    <>
      {total > 0 &&(
        <Link to={"/cart"}>
        <CartContainer>
          <ItemContainer src={shoppingCart} />
          <p>$ {cart.length}</p>
        </CartContainer>
      </Link>)}
    </>
  );
}
