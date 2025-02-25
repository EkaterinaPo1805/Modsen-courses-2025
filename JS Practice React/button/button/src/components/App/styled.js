import styled from "styled-components";

export const Page = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;  
  justify-content: center;
  background-color: ${({ $isColorChange }) => ($isColorChange ? "red" : "green")};
  color: #ffffff;
  width: 52px;
  padding: 10px 32px;
  border-radius: 100px;
`;
