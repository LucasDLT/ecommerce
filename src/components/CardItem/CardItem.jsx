import styled from "styled-components";
import { Link } from "react-router-dom";
import ComponentButton from "../ComponentButton/ComponentButton";
import { Fade } from "react-awesome-reveal";

export default function CardItem({ item }) {
  return (
    <Fade cascade direction="up">
    <DivCard key={item.id}>
        <ItemImage src={item.image} alt={item.name} />
      <div>
        <span>{item.name} </span>
      </div>
      <ComponentButton>
        <Link to={`detail/${item.id}`}> ver detalle</Link>
      </ComponentButton>
    </DivCard>
    </Fade>
  );
}

const DivCard = styled.div`
  font-family: "Dashley", sans-serif;
  font-size: 1.5rem;
  background-color: #3f563d50;
  backdrop-filter: blur(1px);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.1rem;
  max-width: 10rem;
  max-height: 12rem;
  button {
    font-family: "Dashley", sans-serif;
    font-size: 1rem;
    letter-spacing: 1.9px;
    background-color: #a0cb9bcd;
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
