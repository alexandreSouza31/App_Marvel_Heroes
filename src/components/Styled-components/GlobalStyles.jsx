import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Roboto Mono', monospace;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #222;
  color: whitesmoke;
}

body::-webkit-scrollbar,span::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track,span::-webkit-scrollbar-track {
  background: #333;        /* color of the tracking area */
  border-radius: 5px;
}

body::-webkit-scrollbar-thumb,span::-webkit-scrollbar-thumb {
  background-color:whitesmoke;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 2px solid #E61C23;  /* creates padding around scroll thumb */
}

a {
  text-decoration: none;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

form input {
  width: 80%;
}

input {
  border: none;
  border: 1px solid #1a1a1a;
  border-radius: 4px;
  padding: 0.4em 1em;

  text-align: center;
}

input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
`

