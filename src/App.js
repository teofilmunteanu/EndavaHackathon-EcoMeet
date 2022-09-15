import logo from "./logo.svg";
import "./App.css";

import * as React from "react";

import Test from "./Components/test";
import NavBar from "./Components/NavBar";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Test></Test>
    </ChakraProvider>
  );
}

export default App;
