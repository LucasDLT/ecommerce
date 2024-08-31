import flecha from "../../assets/flecha.png";
import { ImgContainer, Greeting, ListContainer } from "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  return (
    <ListContainer>
      <ImgContainer src={flecha} alt="imagen inicial" />
      <Greeting>{greeting}</Greeting>
    </ListContainer>
  );
}
 