import styled from "styled-components";

export default function ComponentButton({ text, onClick}) {
  //aca tuve que buscar como condicionar que se acepte que el componente pueda o no tener el onClick
  return <Button onClick={onClick?onClick:undefined}>{text}</Button>;
}

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background:none;
  border: none;
`;
