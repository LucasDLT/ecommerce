import { useEffect, useState } from "react";
import { openList } from "../../asyncMock";
import CardItem from "../CardItem/CardItem";
import styled from "styled-components";
import { CategorySection } from "../CategoryListContainer/CategoryListContainer";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    openList()
      .then((response) => setItems(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductContainer>
      <ProductSection>
        {items.map((product, id) => (
          <CardItem key={id} item={product} />
        ))}
      </ProductSection>
    </ProductContainer>
  );
}

export const ProductSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 6rem;
  max-width: 60vw;
  position: absolute;
  left: 20%;
`;
const ProductContainer = styled.section`
  position: relative;
`;
