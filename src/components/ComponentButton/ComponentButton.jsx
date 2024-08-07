import styled from "styled-components";

export default function ComponentButton({ text, onClick}) {
  return <Button onClick={onClick?onClick:undefined}>{text}</Button>;
}

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background:none;
  border: none;
`;
