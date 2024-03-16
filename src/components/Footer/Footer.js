import confetti from "canvas-confetti";

import {
  ElementsContainer,
  FooterContainer,
  A,
  FireBtn,
} from "./Footer.styled.js";

export const Footer = () => {
  const onBtnClick = () => {
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    });
  };

  return (
    <footer>
      <FooterContainer>
        <ElementsContainer>
          <p>
            &#169; Created by{" "}
            <A
              rel="noreferrer"
              target="_blank"
              href="https://github.com/NikoNikoUA"
            >
              Mykola Kosynskyi
            </A>
          </p>
          <FireBtn onClick={onBtnClick}>Fire</FireBtn>
        </ElementsContainer>
      </FooterContainer>
    </footer>
  );
};
