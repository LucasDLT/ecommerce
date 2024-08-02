import CartWidget from "../CartWidget/CartWidget";
import earth from "../../assets/element-icon/earth.png";
import fire from "../../assets/element-icon/fire.png";
import air from "../../assets/element-icon/air.png";
import water from "../../assets/element-icon/water.png";
import { useState } from "react";
import { ItemContainer } from "../CartWidget/Cart.css";
import {
  NavContainer,
  NavList,
  CategoryItem,
  CategoryList,
} from "./Navbar.css";

export default function Navbar({ totalItem }) {
  const [openCategory, setOpenCategory] = useState(false);

  function handleCategory() {
    return setOpenCategory(!openCategory);
  }
  return (
    <>
      <NavContainer>
        <CartWidget totalItem="10" />
        <NavList>
          <li>Inicio</li>
          <li onClick={handleCategory}>Lineas</li>
          <CategoryList openCategory={openCategory}>
            <CategoryItem>
              aire
              <ItemContainer src={air} alt="icono del elemento aire" />
            </CategoryItem>
            <CategoryItem>
              fuego
              <ItemContainer src={fire} alt="icono del elemento fuego" />
            </CategoryItem>
            <CategoryItem>
              agua
              <ItemContainer src={water} alt="icono del elemento agua" />
            </CategoryItem>
            <CategoryItem>
              tierra
              <ItemContainer src={earth} alt="icono del elemento tierra" />
            </CategoryItem>
          </CategoryList>

          <li>Nuestra Historia</li>
          <li>Destacados</li>
          <li>Contacto</li>
          <li>Ayuda</li>
        </NavList>
      </NavContainer>
    </>
  );
}
