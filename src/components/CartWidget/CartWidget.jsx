import shoppingCart from "../../assets/shoppingCart.png";

export default function CartWidget({totalItem}) {
  return (
    <>
      <div>
        <img src={shoppingCart} />
        <p>{totalItem}</p>
      </div>
    </>
  );
}
