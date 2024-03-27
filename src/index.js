import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Globalstyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { persistor, store } from "../src/redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/LearnLingo">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <Globalstyle />
  </ThemeProvider>
  // </React.StrictMode>
);
