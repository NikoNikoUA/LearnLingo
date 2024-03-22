import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 20px 0;
  font-weight: 700;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.textColor};
  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.textHoverColor};
  }
`;

export const LinkReg = styled(NavLink)`
  padding: 20px 0;
  font-weight: 700;
  line-height: 1.25;
  color: white;
  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.textHoverColor};
  }
`;

export const SvgLogin = styled.svg`
  fill: none;
  stroke: ${(props) => props.theme.colors.textHoverColor};
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoLink = styled(NavLink)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
`;

export const LogoText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textColor};
`;

export const PagesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 20px 0;
`;

export const ListItem = styled.li`
  position: relative;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.25;
  transition: all 200ms ease;

  &:hover {
    color: black;
    font-weight: bold;
  }

  & .active {
    font-weight: bold;
  }

  & .active::after {
    position: relative;
    font-weight: bold;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.textColor};
    border-radius: 2px;
    bottom: -15px;
    left: 0;
  }
`;

export const PagesLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.textColor};
`;

export const AuthList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const RegLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;

  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  cursor: pointer;

  background: ${(props) => props.theme.colors.textColor};
`;
