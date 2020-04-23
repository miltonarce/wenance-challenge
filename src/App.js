import React from "react";
import Home from "./views/Home";
import theme from "./assets/Theme";
import { ThemeProvider } from "styled-components";

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
