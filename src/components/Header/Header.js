import icons from "../../sprite.svg";
import {
  Link,
  SvgLogin,
  NavContainer,
  LogoLink,
  LogoText,
  PagesList,
  ListItem,
  PagesLink,
  AuthList,
  AuthContainer,
  RegLi,
  LinkReg,
} from "./Header.styled";
import { Container } from "../../CommonStyles.styled";

export const Header = () => {
  return (
    <header>
      <Container>
        <NavContainer>
          <LogoLink to="/">
            <svg width="28px" height="28px">
              <use href={`${icons}#icon-logo`}></use>
            </svg>
            <LogoText>LearnLingo</LogoText>
          </LogoLink>
          <PagesList>
            <ListItem>
              <PagesLink to="/">Home</PagesLink>
            </ListItem>
            <ListItem>
              <PagesLink to="/teachers">Teachers</PagesLink>
            </ListItem>
            <ListItem className="underline">
              <PagesLink to="/favorites">Favorites</PagesLink>
            </ListItem>
          </PagesList>
          <AuthContainer>
            <SvgLogin width="20px" height="20px">
              <use href={`${icons}#icon-login`}></use>
            </SvgLogin>
            <AuthList>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <RegLi>
                <LinkReg to="/registration">Registration</LinkReg>
              </RegLi>
            </AuthList>
          </AuthContainer>
        </NavContainer>
      </Container>
    </header>
  );
};
