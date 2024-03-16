import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Globalstyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";

const theme = {
  colors: {
    textColor: "#121417",
    textHoverColor: "#8a8a89",
    themeOrange: "#F4C550",
    themeHoverOrange: "#FBE9BA",
    themeGrey: "#9FBAAE",
    themeHoverGrey: "#CBDED3",
    themeBlue: "#9FB7CE",
    themeHoverBlue: "#BFD6EA",
    themePink: "#E0A39A",
    themeHoverPink: "#F2C0BD",
    themeReddish: "#F0AA8D",
    themeHoverReddish: "#F4C8BA",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/LearnLingo">
      <App />
    </BrowserRouter>
    <Globalstyle />
  </ThemeProvider>
  // </React.StrictMode>
);
