import CartWidget from "../CartWidget/CartWidget";
import earth from "../../assets/element-icon/earth.png";
import fire from "../../assets/element-icon/fire.png";
import air from "../../assets/element-icon/air.png";
import water from "../../assets/element-icon/water.png";
import { useState } from "react";
import styled from "styled-components";
import { ItemContainer } from "../CartWidget/CartWidget";
export const NavContainer = styled.nav`
  border: 1px solid black;
  font-family: "Dashley", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1.9px;
  margin: 0.5rem;
  padding: 0.5rem;
`;
export const NavList = styled.ul`
  border: solid black 1px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: relative;
  li {
    cursor: pointer;
  }
`;
export const CategoryList = styled.ul`
  display: flex;
  margin-top: 0.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  max-height: ${({ openCategory }) => (openCategory ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.7s ease-in-out;
`;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  padding: 1rem;
  cursor: pointer;
`;

export const NavItem = styled.li``;
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
          <li onClick={handleCategory}>categorias</li>
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
          <li>Ofertas</li>
          <li>Contacto</li>
          <li>Ayuda</li>
        </NavList>
      </NavContainer>
    </>
  );
}
