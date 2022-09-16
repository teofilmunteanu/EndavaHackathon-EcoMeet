import logo from "./logo.svg";
import "./App.css";

import * as React from "react";

import UpperHomePage from "./Components/UpperHomePage";
import NavBar from "./Components/NavBar";
import Description from "./Components/description";

import { ChakraProvider } from "@chakra-ui/react";
import {mainTheme} from "./styles/theme";

function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <NavBar></NavBar>
      <UpperHomePage></UpperHomePage>
      <Description></Description>
    </ChakraProvider>
  );
}

export default App;
