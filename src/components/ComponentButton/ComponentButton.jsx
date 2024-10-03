import styled from "styled-components";

export default function ComponentButton({ children, onClick, backgroundColor, disabled }) {
  return (
    <Button
      style={backgroundColor ? {backgroundColor} : undefined}
      onClick={onClick ? onClick : undefined}
      disabled={disabled}
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
