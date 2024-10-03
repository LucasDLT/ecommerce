import styled from "styled-components";

export default function ComponentButton({ children, onClick, backgroundColor, disabled, className }) {
  return (
    <Button
      style={backgroundColor ? {backgroundColor} : undefined}
      onClick={onClick ? onClick : undefined}
      disabled={disabled}
      className={className}
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
