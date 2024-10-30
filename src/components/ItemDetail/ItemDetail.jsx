import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import ComponentButton from "../ComponentButton/ComponentButton";
import { productById } from "../../asyncMock";
import { cartContext } from "../Context/CartContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export function ItemDetail() {
  const [prod, setProd] = useState(null);
  const { id } = useParams();

  const { addItem } = useContext(cartContext);

  const handleClick = (quantity) => {
    if (prod && quantity > 0) {
      addItem(prod, quantity);  
    }
  };

  useEffect(() => {
    const docRef = doc(db, "products", id )
    getDoc(docRef)
    .then((res)=>{
      setProd({...res.data(), id: res.id})
    })
    
  }, [id]);

  if (!prod) return <div>Loading...</div>;

  return (
    <DetailItem>
      <div>
        <img src={prod.image} alt={prod.title} />
      </div>
      <ItemInfo>
        <span>{prod.description}</span>
        <span>PRECIO: ${prod.price}</span>
        
        <ItemCount item={prod} />
        
        <ComponentButton>
          <Link to="/cart">Ir al carrito</Link>
        </ComponentButton>
        <ComponentButton onClick={() => handleClick(1)}> 
          Agregar al carrito
        </ComponentButton>
      </ItemInfo>
    </DetailItem>
  );
}

export const DetailItem = styled.div`
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
    color: #000000;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  text-align: justify;
  padding: 3rem;
  gap: 0.4rem;
  background-color: #00000083;
  height: 25rem;
  font-weight:bolder;
  letter-spacing:0.5px;
  > button {
    text-align: center;
    font-size: 1.4rem;
    background-color: #36684460;
    border-radius: 0.2rem;
    padding: 1rem;
    cursor: pointer;
  }
`;
