import styled from "styled-components";

export const Page = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  width: 400px;
  padding: 32px;
  background-color: #e8e3fc;
  border-radius: 32px;
`;

export const Input = styled.input`
  height: 40px;
  padding-left: 12px;
  border: 1px solid #dadada;
  border-radius: 12px;

  &:focus {
    border-color: #e8e3fc;
    box-shadow: #7853ff;
    outline: none;
  }
`;

export const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #7853ff;
  padding: 10px 32px;
  border-radius: 100px;
`;
