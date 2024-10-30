import styled from "styled-components";

export const NavContainer = styled.nav`                                               
  letter-spacing: 1.9px;
  display: flex;
  justify-content: right;
  margin-top: 2rem;
  margin-right:5rem;
  position: relative;
  right: 1rem;
`;
export const NavList = styled.ul`
  padding: 0.5rem;
  display: flex;
  align-items: start;
  position: relative;
  gap:5rem;

  button {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.2rem;
    position: relative;
    display: inline-block;
    text-decoration: none;
    font-family: 'Nightfully Haunted', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1.9px;
    margin: 0.1rem;
    padding: 0.3rem;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 1px;
      left: 0;
      background-color: #000000;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.5s ease-out, background-color 0.5 ease-in-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background-color: #000000;
      transition: transform 0.5s ease-in;
    }
    &:not(:hover)::after {
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.5s ease-in-out;
    }
  }
`;
export const CategoryList = styled.ul`
  display: flex;
  margin-top: 0.5rem;
  position: absolute;
  top: 100%;
  left: 20%;
  right: 0;
  justify-content: center;
  align-items: center;
  max-height: ${({ openCategory, openLine }) => (openCategory || openLine ? "300px" : "0")};
  width:26rem;
  overflow: hidden;
  transition: max-height 0.7s ease-in-out;
`;

export const CategoryItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  background-color: transparent;
  height:100%;

`;
