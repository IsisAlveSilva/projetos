import styled from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const Container = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #000;
  align-items: center;
  display: flex;
  padding: 0 30px;
  border-radius: 15px;
  width: 80%;
  justify-content: space-between;
`;
export const Button = styled.button<ButtonProps>`
  border: none;
  margin: 10px;
  width: 60px;
  height: 20px;
  background-color: transparent;
  color: ${(props) => (props.active ? props.theme.colors.secondary : "white")};
`;
