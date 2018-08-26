import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import App from "./components/App";

import { MyProvider } from "./context/MyContext";
import Container from "./containers/Container";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
    html, body {
        margin: 0px;
        padding: 0px;
        font-size: 62.5%;
        font-family: "Roboto";
    }
`;

ReactDOM.render(
  <MyProvider>
    <Container>
      <App />
    </Container>
  </MyProvider>,
  document.getElementById("app")
);
