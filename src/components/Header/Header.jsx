import { HeaderContainer, Title, Slogan } from "./Header.css";
import { Link, useLocation } from "react-router-dom";


export default function Header() {
  const location = useLocation()  
  return (
    <>
      <HeaderContainer $location={location.pathname} >
        <Title $location={location.pathname} ><Link to={'/'} >Elemental</Link></Title>
        <Slogan $location={location.pathname}>Inspirado en la naturaleza</Slogan>
      </HeaderContainer>
    </>
  );
}
