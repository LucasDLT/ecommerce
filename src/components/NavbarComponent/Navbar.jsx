import CartWidget from "../CartWidget/CartWidget";
import earth from "../../assets/element-icon/earth.png";
import fire from "../../assets/element-icon/fire.png";
import air from "../../assets/element-icon/air.png";
import water from "../../assets/element-icon/water.png";
import { useState } from "react";
import styled from "styled-components";
import { ItemContainer } from "../CartWidget/CartWidget";


export const NavContainer = styled.nav`
  font-family: "Dashley", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1.9px;
  margin: 0.5rem;
  padding: 0.5rem;
  
`;
export const NavList = styled.ul`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: relative; 
  border-radius:0.3rem;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);
  
  li {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.2rem;
    position: relative;
    display: inline-block;
    text-decoration: none;
    

    &::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 1px;
    left: 0;
    background-color: #000000;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease-out, background-color 0.5 ease-in-out;
  }
  &:hover::after{
    transform: scaleX(1);
    transform-origin:bottom left;
    background-color: #000000;
    transition: transform 0.5s ease-in ;
  }
  &:not(:hover)::after{
    transform:scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease-in-out;
  }
  
  }

`;
export const CategoryList = styled.ul`
  display: flex;
  margin-top: 0.1rem;
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

export const CategoryItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  font-family: "Dashley", sans-serif;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  border-radius: 0 0 0.4rem 0.4rem;
  box-shadow: 1px 1px 9px 1px rgba(0, 0, 0, 0.5);
  &:hover{
    box-shadow: 1px 1px 5px 1px rgba(90, 85, 85, 0.5);

  }
`;

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
