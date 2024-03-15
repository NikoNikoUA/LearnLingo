import { NavLink } from "react-router-dom";
import icons from "../../sprite.svg";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <svg width="28px" height="28px">
            <use href={`${icons}#icon-logo`}></use>
          </svg>
          <p>LearnLingo</p>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/teachers">Teachers</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
