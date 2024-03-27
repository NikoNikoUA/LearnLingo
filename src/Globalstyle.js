import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const Globalstyle = createGlobalStyle`

body {
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
font-size: 16px;



 ::-webkit-scrollbar {
    width: 8px; 
 
  }

 
::-webkit-scrollbar-track {
    background: transparent; 
    border-radius: 12px; 
  }

 
  ::-webkit-scrollbar-thumb {
    background: rgb(251, 233, 186); 
    border-radius: 12px; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(251, 233, 186, 0.8); 
  }


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

@media (min-width: 320px){
  body {
    min-width: 320px;
  }
  header {
    min-width: 320px;
    
  }
  footer {
    min-width: 320px;
  }
}


`;
