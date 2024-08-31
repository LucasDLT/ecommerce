import styled from "styled-components";

export default function ComponentButton({ children, onClick, backgroundColor }) {
  //aca tuve que buscar como condicionar que se acepte que el componente pueda o no tener el onClick
  return (
    <Button
      style={backgroundColor ? {backgroundColor} : undefined}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </Button>
  );
}

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`;
