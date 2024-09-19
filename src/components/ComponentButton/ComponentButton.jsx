import styled from "styled-components";

export default function ComponentButton({ children, onClick, backgroundColor }) {
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
