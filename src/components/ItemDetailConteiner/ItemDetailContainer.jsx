import { useEffect, useState } from "react";
import {openList} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import styled from "styled-components";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    openList()
      .then((response) => setItems(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>ItemDetailContainer</h1>
      <ProductSection>
        {items.map((product, id) => (
          <ItemDetail key={id} item={product} />
          
        ))}
      </ProductSection>
    </>
  );
}

const ProductSection=styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
  padding: 0.5rem;
  max-width: 70vw;
  max-height: 50vh;
`