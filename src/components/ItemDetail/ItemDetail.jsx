import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { productById } from "../../asyncMock";
import { useEffect, useState } from "react";
import ComponentButton from "../ComponentButton/ComponentButton";
import { Link } from "react-router-dom";

export function ItemDetail() {
  const [prod, setProd] = useState(null);
  const { id } = useParams(); //itemId sale del parametro que se ponga en /:

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await productById(id);
      setProd(product);
    };
    fetchProduct();
  }, [id]);

  if (!prod) return <div>Loading...</div>;

  return (
    <DetailItem>
      <div>
        <img src={prod.image} alt={prod.title} />
      </div>
      <ItemInfo>
        <span>{prod.name}</span>
        <span>{prod.description}</span>
        <span>categoria: {prod.category}</span>
        <span>${prod.price}</span>
        <ItemCount itemStock={prod.stock} />
      <ComponentButton>
        <Link to={"/cart"}>FINALIZAR COMPRA</Link>
      </ComponentButton>
      </ItemInfo>
    </DetailItem>
  );
}

const DetailItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding: 0.1rem;
  gap: 1rem;
  border-radius: 5px;
  img {
    max-height: 100%;
    max-width: 100%;
    padding: 0.1rem;
  }
  span {
    width: 10rem;
    margin-bottom: 0.2rem;
    color: white;
  }
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  text-align: justify;
  padding: 1rem;
  gap: 0.4rem;
  background-color: #00000083;
  height: 25rem;
  > button{
    text-align: center;
    font-size:1.4rem;
    background-color: #36684460;
    border-radius: 0.2rem ;
    padding: 1rem;

  }

`;
