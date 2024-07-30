import CartWidget from "../CartWidget/CartWidget";

export default function Navbar({totalItem}) {
  return (
    <>
      <nav>
        <ul>
          <li>aire
                    <img src="" alt="" />
          </li>
          <li>fuego</li>
          <li>agua</li>
          <li>tierra</li>
        </ul>
        <CartWidget totalItem="10" />
      </nav>
    </>
  );
}
