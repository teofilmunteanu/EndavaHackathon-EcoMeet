import logo from "./logo.svg";
import "./App.css";

import * as React from "react";

import UpperHomePage from "./Components/UpperHomePage";
import NavBar from "./Components/NavBar";
import Description from "./Components/description";
import BottomBar from "./Components/BottomBar";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <UpperHomePage></UpperHomePage>
      <Description></Description>
      <BottomBar></BottomBar>
    </ChakraProvider>
  );
}

export default App;
