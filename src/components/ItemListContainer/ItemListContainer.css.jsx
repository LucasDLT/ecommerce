import styled from "styled-components";
import { Title } from "../Header/Header.css";

export const ListContainer = styled.section`
  margin: 3.5rem 0.5rem;
  height: 50vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
`; 
export const Greeting = styled(Title)`
  margin-top: 0.5rem;
  font-size: 3rem;
  background-color: #4b685847;
  backdrop-filter: blur(3px);
  padding: 1rem;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(
    to left,
    transparent,
    black 2.5%,
    black 98.9%,
    transparent
  );

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background: inherit;
    position: absolute;
    height: 1px;
    background-color: black;
    transform: scaleX(0);
    transition: transform 0.5s ease-out, background-color 0.5 ease-in-out;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  &:hover::before,
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.5s ease-in;
  }
  &:not(:hover)::before,
  &:not(:hover)::after {
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease-in-out;
  }
`;
export const ImgContainer = styled.img`
  margin: 0.5rem;
  font-size: 3rem;
  max-width: 5rem;
`;
