import "./App.css";

import * as React from "react";
import {Route, Routes} from "react-router-dom"

import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";

import { ChakraProvider } from "@chakra-ui/react";
import {mainTheme} from "./styles/theme";


function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<><UpperHomePage/><Description/></>}/>
        </Routes>
    </ChakraProvider>
  );
}

export default App;
