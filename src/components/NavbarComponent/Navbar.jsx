import CartWidget from "../CartWidget/CartWidget";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { ItemContainer } from "../CartWidget/Cart.css";
import ComponentButton from "../ComponentButton/ComponentButton";
import {
  NavContainer,
  NavList,
  CategoryItem,
  CategoryList,
} from "./Navbar.css";
import { productsByCategory } from "../../asyncMock";

export default function Navbar() {
  const [openCategory, setOpenCategory] = useState(false);
  const [openLine, setOpenLine] = useState(false);
  const navigate = useNavigate();
  function handleLine() {
    if (openCategory) {
      setOpenCategory(false);
      setTimeout(() => setOpenLine(!openLine), 400);
    } else {
      setOpenLine(!openLine);
    }
  }

  function handleCategory() {
    if (openLine) {
      setOpenLine(false);
      setTimeout(() => setOpenCategory(!openCategory), 300);
    } else {
      setOpenCategory(!openCategory);
    }
  }
  function handleCategoryClick(category) {
    navigate(`/category/${category}`);
  }
  return (
    <>
      <NavContainer>
        <NavList>
          <ComponentButton>
            <NavLink to="/" activeClassName="active">
              Inicio
            </NavLink>
          </ComponentButton>
          <ComponentButton>
            <NavLink to="/item" activeClassName="active">
              Productos
            </NavLink>
          </ComponentButton>
          {/*<ComponentButton onClick={handleCategory}>Lineas</ComponentButton>
          <CategoryList openCategory={openCategory}>
            <CategoryItem>
              aire
            </CategoryItem>
            <CategoryItem>
              fuego
            </CategoryItem>
            <CategoryItem>
              agua
            </CategoryItem>
            <CategoryItem>
              tierra
            </CategoryItem>
          </CategoryList>*/}

          <ComponentButton onClick={handleLine}>Categorias</ComponentButton>
          <CategoryList openLine={openLine}>
            <CategoryItem onClick={() => handleCategoryClick("tazas")}>
              tazas
            </CategoryItem>
            <CategoryItem onClick={() => handleCategoryClick("recipientes")}>
              recipientes
            </CategoryItem>
            <CategoryItem onClick={() => handleCategoryClick("mates")}>
              mates
            </CategoryItem>
            <CategoryItem onClick={() => handleCategoryClick("platos")}>
              platos
            </CategoryItem>
            <CategoryItem onClick={() => handleCategoryClick("sahumadores")}>
              sahumadores
            </CategoryItem>
          </CategoryList>

        {/*  <ComponentButton>
            <NavLink to="/TerminosYCondiciones" activeClassName="active">
              Terminos y Condiciones
            </NavLink>
          </ComponentButton>*/}
        </NavList>
        <CartWidget totalItem="10" />
      </NavContainer>
    </>
  );
}
