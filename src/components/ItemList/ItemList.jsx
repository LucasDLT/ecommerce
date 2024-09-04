import { useEffect, useState } from "react";
import {openList} from "../../asyncMock";
import CardItem from "../CardItem/CardItem";
import styled from "styled-components";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    openList()
      .then((response) => setItems(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ProductSection>
        {items.map((product, id) => (
          <CardItem key={id} item={product} />
          
        ))}
      </ProductSection>
    </>
  );
}

export const ProductSection=styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  max-width: 100vw;
  height: 30vw;
  position: relative;
  top: 10rem;
`