import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
  padding: 0.5rem;
  //border: black 1px solid;
`;

export const Title = styled.h1`
  
  font-family: "Dashley", sans-serif;
  font-style: oblique;
  font-size: 5rem;
  letter-spacing: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  margin-top: 1rem;
`;
export const Slogan = styled.h2`
  font-family: "Asmbuh";
  font-size: 1.8rem;
  font-style: oblique;
  letter-spacing: 2.3px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Title>ELEMENTAL</Title>
        <Slogan>Inspirado en la naturaleza</Slogan>
      </HeaderContainer>
    </>
  );
}
