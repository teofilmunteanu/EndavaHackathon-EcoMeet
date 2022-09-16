import logo from "./logo.svg";
import "./App.css";

import * as React from "react";

import UpperHomePage from "./Components/UpperHomePage";
import NavBar from "./Components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";

import { ChakraProvider } from "@chakra-ui/react";
import {mainTheme} from "./styles/theme";

function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <NavBar></NavBar>
      <UpperHomePage></UpperHomePage>
      <Description></Description>

import {Route, withRouter, Routes} from "react-router-dom"

function App() {
  return (
    <ChakraProvider>
      <React.Fragment>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<UpperHomePage/>}/>
            
        </Routes>
      </React.Fragment>
    </ChakraProvider>
  );
}

export default App;
