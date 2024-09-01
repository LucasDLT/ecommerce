import { HeaderContainer, Title, Slogan } from "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Title><Link to={'/'} >Elemental</Link></Title>
        <Slogan>Inspirado en la naturaleza</Slogan>
      </HeaderContainer>
    </>
  );
}
