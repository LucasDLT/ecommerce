import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { productById } from "../../asyncMock";
import { useEffect, useState } from "react";

export function CardComponent() {
  const [prod, setProd] = useState(null); 
  const { prodId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await productById(prodId);
      setProd(product);
    };
    fetchProduct();
  }, [prodId]);

  if (!prod) return <div>Loading...</div>;

  return (
    <CardItem>
      <div>
        <img src={prod.image} alt={prod.title} />
      </div>
      <div>
        <span>{prod.name}</span>
        <span>{prod.price}</span>
        <span>{prod.category}</span>
        <span>{prod.description}</span>
      </div>
      <ItemCount itemStock={prod.stock} />
      {/* Poner un botón de agregar al carrito */}
    </CardItem>
  );
}

const CardItem = styled.div`
  border: solid black 1px;
`;
