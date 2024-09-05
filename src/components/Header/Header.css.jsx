import styled from "styled-components";

export const HeaderContainer = styled.header`
  ${(props) =>
    props.$location !== "/"
      ? `
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    position: absolute;
    top: -6rem;
    left: 0.5rem;
    transform: scale(0.5); 
    transition: top 1s ease-in-out, left 1s ease-in-out, transform 1s ease-in-out;
  `
      : `
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: top 1s ease-in-out, left 1s ease-in-out, transform 1s ease-in-out;
  `}
`;

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
  a {
    color: #172a18 !important;
  }
`;
export const Slogan = styled.h2`
  ${(props) =>
    props.$location !== "/"
      ? `
      font-family: 'Nightfully Haunted';
      font-size: 2.5rem;
      font-style: oblique;
      letter-spacing: 2.3px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;  
      opacity: 0;
      color: #ffffff !important; 
      transform: translateY(-50px);
      transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`
      : `
      font-family: 'Nightfully Haunted'; sans-serif;                                 
      font-size: 2.5rem;
      font-style: oblique;
      letter-spacing: 2.3px;
      display: flex;
      text-align: center;
      color: #ffffff !important; 
      align-items: center;
      justify-content: center;  
      opacity: 1;
      transform: translateY(0);
      transition: opacity 2s ease-in-out, transform 2s ease-in-out;
`}
`;
