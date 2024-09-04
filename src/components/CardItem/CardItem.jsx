import styled from "styled-components";
import { Link } from "react-router-dom";
import ComponentButton from "../ComponentButton/ComponentButton";

export default function CardItem({ item }) {
  return (
    <DivCard key={item.id}>
        <ItemImage src={item.image} alt={item.name} />
      <div>
        <span>{item.name} </span>
      </div>
      <ComponentButton>
        <Link to={`detail/${item.id}`}> ver detalle</Link>
      </ComponentButton>
    </DivCard>
  );
}

const DivCard = styled.div`
  font-family: "Dashley", sans-serif;
  font-size: 1.5rem;
  background-color: #3f563d6b;
  backdrop-filter: blur(1px);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.1rem;
  max-width: 15rem;
  max-height: 17rem;
  button {
    font-family: "Dashley", sans-serif;
    font-size: 1rem;
    letter-spacing: 1.9px;
    background-color: #a0cb9b;
    border-radius: 0.2rem;
    border: solid grey 0.5px;
    text-align: center;
  }
  span{
    letter-spacing: 2px;
  }
`;
const ItemImage = styled.img`
  width: 100%;
`;
