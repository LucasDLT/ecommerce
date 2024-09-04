import styled from "styled-components";

export const HeaderContainer = styled.header`
  ${(props) =>
    props.$location !== "/"
      ? `
    display: flex;
    flex-direction: column;
    padding: 0.1rem;
    position:absolute;
    top:1px;
    left:0.5rem;
    transition: top 1s ease-in-out, left 1s ease-in-out;
  `
      : `
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    height: 52vh;
    margin: 2rem;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%)

  `}
`;

//; EN TODAS LAS RUTAS VOY A TENER QUE PONER EL TITULO, ES DECIR, PONER EN ROUTES * PARA QUE RECONOZCA QUE VA EN TODAS

export const Title = styled.h1`

    font-family: "Dashley", sans-serif;
    font-style: oblique;
    font-size: 9rem;
    letter-spacing: 5px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 0.5rem;
    margin-top: 1rem;

`;
export const Slogan = styled.h2`
  ${(props) =>
    props.$location !== "/"
      ? `
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
`
      : `
  font-family: "Asmbuh";
  font-size: 2.5rem;
  font-style: oblique;
  letter-spacing: 2.3px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;  
  opacity: 1;
  transform: translateY(0);
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
`}
`;

