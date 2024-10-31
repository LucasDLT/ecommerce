import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import ComponentButton from "../ComponentButton/ComponentButton";
import { productById } from "../../asyncMock";
import { cartContext } from "../Context/CartContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Fade } from "react-awesome-reveal";
import { MutatingDots } from "react-loader-spinner";

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
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((res) => {
      setProd({ ...res.data(), id: res.id });
    });
  }, [id]);

  if (!prod)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15rem",
        }}
      >
        <MutatingDots
          visible={true}
          height="150"
          width="150"
          color="#1b451a"
          secondaryColor="#000000"
          radius="15"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  return (
    <DetailItem>
      <Fade cascade direction="up">
        <div>
          <img src={prod.image} alt={prod.title} />
        </div>
      </Fade>
      <Fade cascade direction="down">
        <ItemInfo>
          <span style={{textAlign:'center', fontSize:'2rem', margin:'0.5rem'}}>{prod.name} </span>
          <span>{prod.description}</span>
          <span style={{textAlign:'center', fontSize:'2rem', margin:'1rem'}}> ${prod.price}</span>

          <ItemCount item={prod} />

          <ComponentButton>
            <Link to="/cart">Ir al carrito</Link>
          </ComponentButton>
          <ComponentButton onClick={() => handleClick(1)}>
            Agregar al carrito
          </ComponentButton>
        </ItemInfo>
      </Fade>
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
    width: 17rem;
    margin-bottom: 0.2rem;
    color: #011506;
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
  background-color: #010f01ac;
  height: 25rem;
  font-size: lighter;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 0.5px;
  width: 20rem;
  > button {
    text-align: center;
    font-size: 1.5rem;
    background-color: #2e593ac3;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    color: #010101;
    width: 15rem;
  }
`;
