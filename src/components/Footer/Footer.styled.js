import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 20px 0;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const A = styled.a`
  color: black;
  font-weight: bold;
`;

export const FireBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.textColor};
  height: 30px;
  width: 50px;
  color: white;
  transition: background-color 250ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.textHoverColor};
  }
`;
