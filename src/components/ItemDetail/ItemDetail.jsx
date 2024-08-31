import styled from "styled-components";
import { Link } from "react-router-dom";
import ComponentButton from "../ComponentButton/ComponentButton";

export default function ItemDetail({ item }) {

  return (
    <DivItemDetail key={item.id}>
      <div>
        <ItemImage src={item.image} alt={item.name} />
      </div>
      <div>
        <span>{item.name} </span>
      </div>
      <ComponentButton>
      <Link to={`/productos/${item.id}`}>  ver detalle</Link>
      </ComponentButton>
    </DivItemDetail>
  );
}

const DivItemDetail = styled.div`
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.1rem;
  max-width: 15rem;
  max-height: 30rem;
`;
const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;
