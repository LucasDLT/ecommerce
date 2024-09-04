import styled from "styled-components";

export default function () {
  return (
    <Footer>
      <p>
        &copy; 2024 Elemental. Todos los derechos reservados. Desarrollado por
        Lucas Sebastian de la Torre.
      </p>
      <ul>
        <li>
          <a href="">Nuestra Historia</a>//cambiarlo con terminos y condiciones
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
        <li>
          <a href="">Ayuda</a>
        </li>
      </ul>
    </Footer>
  );
}

export const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "Dashley", sans-serif;
  justify-content: center;
  letter-spacing: 2px;
  align-items: center;
  background-color: #9adbb744;
  backdrop-filter: blur(3px);
  mask-image: linear-gradient(
    to left,
    transparent,
    black 2.5%,
    black 98.9%,
    transparent
  );
  position: absolute;
  bottom: 0.1rem;
  left: 10%;
  border: solid black 1px;
`;
