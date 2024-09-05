import React from "react";
import { useParams, Outlet } from "react-router-dom";
import { productsByCategory } from "../../asyncMock";
import CardItem from "../CardItem/CardItem";
import { ProductSection } from "../ItemList/ItemList";
import styled from "styled-components";

const CategoryView = () => {
  const { categoryId } = useParams();
  const filteredProducts = productsByCategory(categoryId);

  return (
    <CategorySection>
      <h1>Productos en la categoría: {categoryId}</h1>
      <ProductSection>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, id) => (
            <CardItem key={id} item={product} />
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </ProductSection>
    </CategorySection>
  );
};

export default CategoryView;

export const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  font-family: "Nightfully Haunted", sans-serif;
  font-size: x-large;
  max-width: 100vw;
  position: relative;
  section {
    position: absolute;
    top: 50%;
    left: 30%;
  }
`;
