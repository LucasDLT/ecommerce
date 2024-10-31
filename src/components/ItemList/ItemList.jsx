import { useContext} from "react";
import CardItem from "../CardItem/CardItem";
import styled from "styled-components";
import { ContextApp } from "../Context/ContextApp";
import { Slide } from "react-awesome-reveal";

export default function ItemList() {

  const [products]=useContext(ContextApp)//destructuring de products utilizando el hook usecontext y dentro pasamos el contexto creado

  return (
    <ProductContainer>
      <ProductSection>
        {products.map((product, id) => (
        <Slide direction="up" duration={2000}>
          <CardItem key={id} item={product} />
        </Slide>
        ))}
      </ProductSection>
    </ProductContainer>
  );
}

export const ProductSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 6rem;
  max-width: 60vw;
  position: absolute;
  left: 20%;
`;
const ProductContainer = styled.section`
  position: relative;
`;
