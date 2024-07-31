import styled from "styled-components"
import { Title } from "../Header/Header";
import flecha from "../../assets/flecha.png"

export const ListContainer = styled.section`
margin: 3.5rem 0.5rem;
border: solid 1px black;
height: 50vh;
width: auto; 
display :flex ;
flex-direction: column;
 justify-content: center;
 align-items: center;
  
`
export const Greeting = styled(Title)`
 margin-top: 0.5rem;
 font-size: 3rem;
`
export const ImgContainer=styled.img`
 margin: 0.5rem;
 font-size: 3rem;
 max-width: 5rem;
 
`
export default function ItemListContainer({greeting}) {
  return (
    <ListContainer>
      <ImgContainer src={flecha} alt="imagen inicial" />
      <Greeting>{greeting}</Greeting>
    </ListContainer>
  );
}
