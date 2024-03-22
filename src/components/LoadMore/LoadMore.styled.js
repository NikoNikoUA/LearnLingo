import styled from "styled-components";

export const LoadBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;

  border: none;
  border-radius: 12px;
  padding: 16px 48px;
  max-width: 183px;
  height: 60px;

  background-color: ${(props) => props.theme.colors.themeOrange};
  color: ${(props) => props.theme.colors.textColor};
  transition: all 250ms ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.themeHoverOrange};
    color: ${(props) => props.theme.colors.textHoverColor};
  }
`;
