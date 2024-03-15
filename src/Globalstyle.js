import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const Globalstyle = createGlobalStyle`

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
font-size: 16px;
padding: 20px 64px 32px;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
}

a {
text-decoration: none;
}

button {
  cursor: pointer;
}


`;
