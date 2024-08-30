import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
  return (
    <DivItemDetail key={item.id}>
      <div>
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <span>{item.stock} </span>
        <span>{item.name} </span>
        <span>{item.description} </span>
        <span>{item.price} </span>
      </div>
      <ItemCount itemStock={item.stock}  />
    </DivItemDetail >
  );
}

const DivItemDetail = styled.div`
  border: solid black 1px;
  display: flex;
  margin: 0.1rem;
  max-width: 15rem;
  max-height: 30rem;
`

